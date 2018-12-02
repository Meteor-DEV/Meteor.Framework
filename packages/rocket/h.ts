import { Attributes, ComponentClass, FunctionComponent, ReactElement, ReactNode } from "react";
import React from "react";

type IH = {
    (el: ReactNode[]): ReactElement<void>,
    <P extends object>(el: FunctionComponent<P> | ComponentClass<P> | string): ReactElement<void>,
    <P extends object>(el: FunctionComponent<P> | ComponentClass<P> | string, props: Attributes & P): ReactElement<P>,
    <P extends object>(el: FunctionComponent<P> | ComponentClass<P> | string, children: ReactNode[]): ReactElement<P>,
    <P extends object>(el: FunctionComponent<P> | ComponentClass<P> | string, props: Attributes & P, children: ReactNode[]): ReactElement<P>
};
// TODO: Optimizations (use keys where applicable)
const h: IH = ((...args: any[]) => {
    if (args.length === 1) {
        if (args[0] instanceof Array) {
            return h(React.Fragment, null, args[0]);
        } else {
            return React.createElement(args[0]);
        }
    } else if (args.length === 2) {
        if (args[1] instanceof Array) {
            if (args[1].length === 1)
                return React.createElement(args[0], null, args[1][0]);
            return React.createElement(args[0], null, ...args[1]);
        } else {
            return React.createElement(args[0], args[1]);
        }
    } else {
        if (args[2].length === 1)
            return React.createElement(args[0], args[1], args[2][0]);
        return React.createElement(args[0], args[1], ...args[2]);
    }
}) as any;
const frag = (p: object, el: ReactNode[]) => {
    return h(React.Fragment, null, el);
};
export { h, frag };
