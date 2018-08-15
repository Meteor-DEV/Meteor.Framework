import Logger from '@meteor-it/logger';

import * as multipart from './multipart';

import {EventEmitter} from 'events';
import * as http from 'http';
import {METHODS,IncomingMessage, Agent, ServerResponse, ClientRequest} from 'http';
import * as https from 'https';
import {parse as parseUrl, resolve, Url} from 'url';
import {stringify} from 'querystring';
import iconv from 'iconv-lite';
import {IMultiPartData} from "./multipart";

export * from './multipart';

const POSSIBLE_EVENTS = [...METHODS];
const POSSIBLE_MIDDLEWARES = ['STREAM'];

const USER_AGENT = 'Meteor-IT XRest';

// TODO: More assertions

const decoders:{[key:string]:((buffer:Buffer)=>Promise<Buffer>)} = {
    gzip(buf:Buffer):Promise<Buffer> {
        return new Promise((res,rej)=>{
            zlib.gunzip(buf, (err:Error,result:Buffer)=>err?rej(err):res(result));
        });
    },
    deflate(buf:Buffer):Promise<Buffer>  {
        return new Promise((res,rej)=>{
            zlib.inflate(buf, (err:Error,result:Buffer)=>err?rej(err):res(result));
        });
    }
};
const parsers = {
    async json(text:string) {
        return JSON.parse(text);
    }
};

export type IRequestHeaders = {[key:string]:string|number};
export type IRequestRepeatOptions = {
    repeatIn?:number;
    shouldRepeatOnTimeout?:boolean;
    shouldRepeatBeIncrementing?:boolean;
    maxRepeatIncrementMultipler?:number;
}
export type IRequestOptions = {
    /**
     * Additional headers to include with request
     */
    headers?:IRequestHeaders;
    /**
     * POST data
     */
    data?:Buffer|string|IMultiPartData;
    /**
     * Request method
     */
    method?:string;
    /**
     * Should library follow redirect responses
     */
    followRedirects?:boolean;
    /**
     * Time allowed to make a request
     * if 0 - then request can long forever
     */
    timeout?:number;

    repeat?: IRequestRepeatOptions;
    /**
     * Parse body as JSON/XML/any
     * @param data
     */
    parser?:(data:string)=>Promise<any>;
    /**
     * Request query parameters
     */
    query?:string|{[key:string]:string|number};
    /**
     * Should data field to be handled as IMultiPartData
     */
    multipart?:boolean;
    encoding?:string;
    decoding?:string;
    rejectUnauthorized?:boolean;
    agent?:Agent;
    /**
     * Internal
     * TODO: Move to Request
     */
    timeoutFn?:any;

    /**
     * login for the basic auth
     */
    username?:string;
    /**
     * password for the basic auth
     */
    password?:string;
    /**
     * token for the bearer auth
     */
    accessToken?:string;
}
export type IExtendedIncomingMessage=IncomingMessage&{raw:Buffer,rawEncoded:Buffer};
class Request extends EventEmitter {
    url:string;
    parsedUrl: Url;
    options:IRequestOptions;
    headers:IRequestHeaders;
    request: any;
    aborted: boolean;
    timedout: boolean;

    constructor(url:string, options:IRequestOptions) {
        super();
        this.prepare(url, options);
    }

    prepare(url:string, options:IRequestOptions) {
        logger.debug('prepare(%s)', url);
        if (url.indexOf('undefined') + 1) {
            logger.warn('undefined found in request url! Stack for reference:');
            logger.warn(new Error('reference stack').stack);
        }
        this.parsedUrl = parseUrl(url);
        this.options = options;
        this.headers = {
            'Accept': '*/*',
            'User-Agent': USER_AGENT,
            'Host': this.parsedUrl.host,
            'Accept-Encoding': 'gzip, deflate',
            ...options.headers
        };

        // set port and method defaults
        if (!this.parsedUrl.port)
            this.parsedUrl.port = (this.parsedUrl.protocol === 'https:') ? '443' : '80';
        if (!this.options.method)
            this.options.method = (this.options.data) ? 'POST' : 'GET';
        if (typeof this.options.followRedirects === 'undefined')
            this.options.followRedirects = true;
        if (this.options.timeout === undefined)
            this.options.timeout = 12000;
        if (!this.options.parser)
            this.options.parser = parsers.json;

        if(this.options.method==='GET'&&this.options.data)
            throw new Error('GET requests doesn\'t supports request body!');

        // stringify query given in options of not given in URL
        if (this.options.query) {
            if (typeof this.options.query === 'object')
                this.parsedUrl.query = stringify(this.options.query);
            else this.parsedUrl.query = this.options.query;
        }
        this.applyAuth();

        if (this.options.multipart) {
            if(!this.options.data)
                throw new Error('No data is defined for multipart request!');
            if(this.options.data instanceof Buffer||typeof this.options.data==='string')
                throw new Error('When multipart mode is enabled, you cannot pass plain data!');
            this.headers['Content-Type'] = `multipart/form-data; boundary=${multipart.DEFAULT_BOUNDARY}`;
            const multipartSize = multipart.sizeOf(this.options.data, multipart.DEFAULT_BOUNDARY);
            if (!isNaN(multipartSize))
                this.headers['Content-Length'] = multipartSize;
            else
                throw new Error('Cannot get Content-Length!');
        }
        else {
            if (typeof this.options.data === 'object' && !Buffer.isBuffer(this.options.data)) {
                this.options.data = stringify(this.options.data);
                this.headers['Content-Type'] = 'application/x-www-form-urlencoded';
                this.headers['Content-Length'] = this.options.data.length;
            }
            if (typeof this.options.data === 'string') {
                const buffer = new Buffer(this.options.data, this.options.encoding || 'utf8');
                this.options.data = buffer;
                this.headers['Content-Length'] = buffer.length;
            }
            if (!this.options.data) {
                this.headers['Content-Length'] = 0;
            }
        }

        const proto:any = (this.parsedUrl.protocol === 'https:') ? https : http;

        this.request = proto.request({
            host: this.parsedUrl.hostname,
            port: this.parsedUrl.port,
            path: this.fullPath,
            method: this.options.method,
            headers: this.headers,
            rejectUnauthorized: this.options.rejectUnauthorized,
            agent: this.options.agent
        });
        this.makeRequest();
    }

    /**
     * Test if response is a redirect to the another page
     * @param response
     */
    static isRedirect(response:IExtendedIncomingMessage) {
        return ([301, 302, 303, 307, 308].includes(response.statusCode));
    }

    get fullPath() {
        let path = this.parsedUrl.pathname || '/';
        if (this.parsedUrl.hash) path += this.parsedUrl.hash;
        if (this.parsedUrl.query) path += `?${this.parsedUrl.query}`;
        return path;
    }

    applyAuth() {
        let authParts;

        if (this.parsedUrl.auth) {
            authParts = this.parsedUrl.auth.split(':');
            this.options.username = authParts[0];
            this.options.password = authParts[1];
        }

        if (this.options.username && this.options.password !== undefined) {
            const b = new Buffer([this.options.username, this.options.password].join(':'));
            this.headers['Authorization'] = `Basic ${b.toString('base64')}`;
        }
        else if (this.options.accessToken) {
            this.headers['Authorization'] = `Bearer ${this.options.accessToken}`;
        }
    }

    responseHandler(response:IExtendedIncomingMessage) {
        if (Request.isRedirect(response) && this.options.followRedirects) {
            try {
                // 303 should redirect and retrieve content with the GET method
                // http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.3.4
                if (response.statusCode === 303) {
                    this.parsedUrl = parseUrl(resolve(this.parsedUrl.href, response.headers['location']));
                    this.options.method = 'GET';
                    delete this.options.data;
                    this.reRetry();
                }
                else {
                    this.parsedUrl = parseUrl(resolve(this.parsedUrl.href, response.headers['location']));
                    this.reRetry();
                    // TODO: Handle somehow infinite redirects
                }
            }
            catch (err) {
                err.message = `Failed to follow redirect: ${err.message}`;
                this.fireError(err, response);
            }
        }
        else {
            let bodyParts:Buffer[] = [];

            // Browserify/some webpack-provided stubs doesn't supports this
            if (typeof response.setEncoding === 'function')
                response.setEncoding('binary');

            response.on('data', chunk => {
                bodyParts.push(typeof chunk==='string'?Buffer.from(chunk):chunk);
            });

            response.on('end', async () => {
                let body=Buffer.concat(bodyParts);
                response.rawEncoded = body;
                try {
                    body = await Request.decode(body, response);
                    response.raw = body;
                    body = await Request.iconv(body, response);
                    let encoded = await this.encode(body);
                    this.fireSuccess(body, encoded);
                }catch(e){
                    this.fireError(e,response);
                }
            });
        }
    }

    static async decode(body:Buffer, response:IExtendedIncomingMessage) {
        const decoder = response.headers['content-encoding'];

        if (decoder in decoders) {
            return await decoders[decoder].call(response, body);
        }
        else {
            return body;
        }
    }

    static iconv(body:Buffer, response:IExtendedIncomingMessage):Promise<Buffer> {
        let contentType = response.headers['content-type'];
            if (contentType) {
                let charsetRegexpResult = /\bcharset=(.+)(?:;|$)/i.exec(contentType);
                if (charsetRegexpResult) {
                    let charset = charsetRegexpResult[1].trim().toUpperCase();
                    if (charset !== 'UTF-8')
                        try {
                            return Promise.resolve(Buffer.from(iconv.decode(body, charset)));
                        }catch(e){}
                }
            }
        return Promise.resolve(body);
    }

    encode(body:Buffer):Promise<any> {
        if (this.options.decoding === 'buffer') {
            return Promise.resolve(body);
        }
        else {
            let bodyString = body.toString(this.options.decoding);
            if (this.options.parser) {
                return this.options.parser(bodyString);
            }
            else {
                return Promise.resolve(body);
            }
        }
    }

    fireError(err:Error, response:IExtendedIncomingMessage) {
        this.fireCancelTimeout();
        this.emit('error', err, response);
        this.emit('complete', err, response);
    }

    fireCancelTimeout() {
        if (this.options.timeout) {
            clearTimeout(this.options.timeoutFn);
        }
    }

    fireTimeout(time:number) {
        this.emit('timeout', new Error(`Request isn't completed in ${time}ms`));
        this.aborted = true;
        this.timedout = true;
        this.request.abort();
    }

    fireSuccess(body:any, response:IExtendedIncomingMessage) {
        if (response.statusCode >= 400) {
            this.emit('fail', body, response);
        }
        else {
            this.emit('success', body, response);
        }
        this.emit(response.statusCode.toString().replace(/\d{2}$/, 'XX'), body, response);
        this.emit(response.statusCode.toString(), body, response);
        this.emit('complete', body, response);
    }

    makeRequest() {
        const timeoutMs = this.options.timeout;
        if (timeoutMs) {
            this.options.timeoutFn = setTimeout(() => {
                this.fireTimeout(timeoutMs);
            }, timeoutMs);
        }
        this.request.on('response', (response:IExtendedIncomingMessage) => {
            this.fireCancelTimeout();
            this.emit('response', response);
            this.responseHandler(response);
        }).on('error', (err:Error) => {
            this.fireCancelTimeout();
            if (!this.aborted) {
                this.fireError(err, null);
            }
        });
    }

    reRetry() {
        this.request.removeAllListeners().on('error', () => {
        });
        if (this.request.finished) {
            this.request.abort();
        }
        this.prepare(this.parsedUrl.href, this.options); // reusing request object to handle recursive calls and remember listeners
        this.run();
    }

    async run() {
        if (this.options.multipart) {
            await multipart.write(this.options.encoding || 'binary',this.request, this.options.data as IMultiPartData);
            this.request.end();
        }
        else {
            if (this.options.data) {
                this.request.write(this.options.data, this.options.encoding || 'utf8');
            }
            this.request.end();
        }

        return this;
    }

    abort(err:Error) {
        this.request.on('close', () => {
            if (err) {
                this.fireError(err, null);
            }
            else {
                this.emit('complete', null, null);
            }
        });

        this.aborted = true;
        this.request.abort();
        this.emit('abort', err);
        return this;
    }

    retry(timeout:number) {
        const fn = this.reRetry.bind(this);
        if (!isFinite(timeout) || timeout <= 0) {
            process.nextTick(fn, timeout);
        }
        else {
            setTimeout(fn, timeout);
        }
        return this;
    }
}

const logger = new Logger('xrest');

export function emit(eventString: string, options: IRequestOptions = {}): Promise<IExtendedIncomingMessage> {
    let [event, path, ...middlewares] = eventString.split(' ');
    let middleFunctions = [];
    for (let middleware of middlewares) {
        if (middleware.toUpperCase() !== middleware) {
            logger.warn('Upper case is preffered for middleware names! (Got: %s)', event);
            middleware = middleware.toUpperCase();
        }
        if (!~POSSIBLE_MIDDLEWARES.indexOf(middleware))
            throw new Error('Unknown middleware: ' + middleware);
        middleFunctions.push(middleware);
    }
    if (event.toUpperCase() !== event) {
        logger.warn('Upper case is preffered for event names! (Got: %s)', event);
        event = event.toUpperCase();
    }
    if (!~POSSIBLE_EVENTS.indexOf(event)) {
        throw new Error('Unknown event: ' + event + ', possible events are ' + POSSIBLE_EVENTS.join(', ') + '!');
    }
    options.method = event;
    const request = new Request(path, options);
    return new Promise((res,rej)=>{
        request.run();
        let repeats = 0;
        request.on('timeout',async (e:Error)=>{
            if(options.repeat&&options.repeat.shouldRepeatOnTimeout){
                repeats++;
                let repeatIn = options.repeat.repeatIn||5000;
                if(options.repeat.shouldRepeatBeIncrementing){
                    repeatIn*=Math.min(options.repeat.maxRepeatIncrementMultipler||12,repeats);
                }
                logger.debug(`Timeout, repeat in ${repeatIn}ms`);
                await new Promise(res=>setTimeout(res,repeatIn));
                try{
                    let data=await emit(eventString,options);
                    res(data);
                }catch(e){
                    rej(e);
                }
            }else
                rej(e);
        });
        request.on('complete',(result,response)=>{
            if(result instanceof Error) {
                rej(result);
                return;
            }
            response.body=result;
            res(response);
        });
    });
}

export default class XRest {
    baseUrl:string;
    defaultOptions:IRequestOptions;

    constructor(url:string, defaultOptions:IRequestOptions) {
        logger.debug('new XRest(%s)', url);
        this.baseUrl = url;
        this.defaultOptions = defaultOptions;
    }

    emit(eventString:string, options:IRequestOptions) {
        let [event, path, ...middlewares] = eventString.split(' ');
        let opts={};
        Object.assign(opts,this.defaultOptions,options);
        path = resolve(this.baseUrl, path);
        return emit([event, path, ...middlewares].join(' '), opts);
    }
}