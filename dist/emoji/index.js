(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports"], function (require, exports) {
    "use strict";
    var map = {
        'man and man holding hands': '👬',
        'woman and woman holding hands': '👭',
        'evergreen tree': '🌲',
        'deciduous tree': '🌳',
        lemon: '🍋',
        'smiling face with sunglasses': '😎',
        'grinning face': '🕧',
        'black sun with rays': '☀',
        cloud: '☁',
        'umbrella with rain drops': '☔',
        'snowman without snow': '⛄',
        'high voltage sign': '⚡',
        cyclone: '🌀',
        foggy: '🌁',
        'closed umbrella': '🌂',
        'night with stars': '🌃',
        'sunrise over mountains': '🌄',
        sunrise: '🌅',
        'cityscape at dusk': '🌆',
        'sunset over buildings': '🌇',
        rainbow: '🌈',
        snowflake: '❄',
        'sun behind cloud': '⛅',
        'bridge at night': '🌉',
        'water wave': '🌊',
        volcano: '🌋',
        'milky way': '🌌',
        'earth globe asia-australia': '🌏',
        'new moon symbol': '🌑',
        'waxing gibbous moon symbol': '🌔',
        'first quarter moon symbol': '🌓',
        'crescent moon': '🌙',
        'full moon symbol': '🌕',
        'first quarter moon with face': '🌛',
        'glowing star': '🌟',
        'shooting star': '🌠',
        'clock face one oclock': '🕐',
        'clock face two oclock': '🕑',
        'clock face three oclock': '🕒',
        'clock face four oclock': '🕓',
        'clock face five oclock': '🕔',
        'clock face six oclock': '🕕',
        'clock face seven oclock': '🕖',
        'clock face eight oclock': '🕗',
        'clock face nine oclock': '🕘',
        'clock face ten oclock': '🕙',
        'clock face eleven oclock': '🕚',
        'clock face twelve oclock': '🕛',
        watch: '⌚',
        hourglass: '⌛',
        'alarm clock': '⏰',
        'hourglass with flowing sand': '⏳',
        aries: '♈',
        taurus: '♉',
        gemini: '♊',
        cancer: '♋',
        leo: '♌',
        virgo: '♍',
        libra: '♎',
        scorpius: '♏',
        sagittarius: '♐',
        capricorn: '♑',
        aquarius: '♒',
        pisces: '♓',
        ophiuchus: '⛎',
        'four leaf clover': '🍀',
        tulip: '🌷',
        seedling: '🌱',
        'maple leaf': '🍁',
        'cherry blossom': '🌸',
        rose: '🌹',
        'fallen leaf': '🍂',
        'leaf fluttering in wind': '🍃',
        hibiscus: '🌺',
        sunflower: '🌻',
        'palm tree': '🌴',
        cactus: '🌵',
        'ear of rice': '🌾',
        'ear of maize': '🌽',
        mushroom: '🍄',
        chestnut: '🌰',
        blossom: '🌼',
        herb: '🌿',
        cherries: '🍒',
        banana: '🍌',
        'red apple': '🍎',
        tangerine: '🍊',
        strawberry: '🍓',
        watermelon: '🍉',
        tomato: '🍅',
        aubergine: '🍆',
        melon: '🍈',
        pineapple: '🍍',
        grapes: '🍇',
        peach: '🍑',
        'green apple': '🍏',
        eyes: '👀',
        ear: '👂',
        nose: '👃',
        mouth: '👄',
        tongue: '👅',
        lipstick: '💄',
        'nail polish': '💅',
        'face massage': '💆',
        haircut: '💇',
        'barber pole': '💈',
        'bust in silhouette': '👤',
        boy: '👦',
        girl: '👧',
        man: '👨',
        woman: '👩',
        family: '👪',
        'man and woman holding hands': '👫',
        'police officer': '👮',
        'woman with bunny ears': '👯',
        'bride with veil': '👰',
        'person with blond hair': '👱',
        'man with gua pi mao': '👲',
        'man with turban': '👳',
        'older man': '👴',
        'older woman': '👵',
        baby: '👶',
        'construction worker': '👷',
        princess: '👸',
        'japanese ogre': '👹',
        'japanese goblin': '👺',
        ghost: '👻',
        'baby angel': '👼',
        'extraterrestrial alien': '👽',
        'alien monster': '👾',
        imp: '👿',
        skull: '💀',
        'information desk person': '💁',
        guardsman: '💂',
        dancer: '💃',
        snail: '🐌',
        snake: '🐍',
        horse: '🐎',
        crocodile: '🐊',
        whale: '🐋',
        dragon: '🐉',
        cat: '🐈',
        rabbit: '🐇',
        leopard: '🐆',
        tiger: '🐅',
        cow: '🐄',
        'water buffalo': '🐃',
        ox: '🐂',
        mouse: '🐁',
        rat: '🐀',
        chicken: '🐔',
        boar: '🐗',
        'bactrian camel': '🐫',
        elephant: '🐘',
        koala: '🐨',
        monkey: '🐒',
        sheep: '🐑',
        octopus: '🐙',
        'spiral shell': '🐚',
        bug: '🐛',
        ant: '🐜',
        honeybee: '🐝',
        'lady beetle': '🐞',
        'tropical fish': '🐠',
        blowfish: '🐡',
        turtle: '🐢',
        'baby chick': '🐤',
        'front-facing baby chick': '🐥',
        bird: '🐦',
        'hatching chick': '🐣',
        penguin: '🐧',
        poodle: '🐩',
        fish: '🐟',
        dolphin: '🐬',
        'mouse face': '🐭',
        'tiger face': '🐯',
        'cat face': '🐱',
        'spouting whale': '🐳',
        'horse face': '🐴',
        'monkey face': '🐵',
        'dog face': '🐶',
        'pig face': '🐷',
        'bear face': '🐻',
        'hamster face': '🐹',
        'wolf face': '🐺',
        'cow face': '🐮',
        'rabbit face': '🐰',
        'frog face': '🐸',
        'paw prints': '🐾',
        'dragon face': '🐲',
        'panda face': '🐼',
        'pig nose': '🐽',
        'angry face': '😠',
        'weary face': '😩',
        'astonished face': '😲',
        'disappointed face': '😞',
        'dizzy face': '😵',
        'face with open mouth and cold sweat': '😰',
        'unamused face': '😒',
        'smiling face with heart-shaped eyes': '😍',
        'face with look of triumph': '😤',
        'face with stuck-out tongue and winking eye': '😜',
        'face with stuck-out tongue and tightly-closed eyes': '😝',
        'face savouring delicious food': '😋',
        'face throwing a kiss': '😘',
        'kissing face with closed eyes': '😚',
        'face with medical mask': '😷',
        'flushed face': '😳',
        'smiling face with open mouth': '😃',
        'smiling face with open mouth and cold sweat': '😅',
        'smiling face with open mouth and tightly-closed eyes': '😆',
        'grinning face with smiling eyes': '😁',
        'face with tears of joy': '😂',
        'smiling face with smiling eyes': '😊',
        'white smiling face': '☺',
        'smiling face with open mouth and smiling eyes': '😄',
        'crying face': '😢',
        'loudly crying face': '😭',
        'fearful face': '😨',
        'persevering face': '😣',
        'pouting face': '😡',
        'relieved face': '😌',
        'confounded face': '😖',
        'pensive face': '😔',
        'face screaming in fear': '😱',
        'sleepy face': '😪',
        'smirking face': '😏',
        'face with cold sweat': '😓',
        'disappointed but relieved face': '😥',
        'tired face': '😫',
        'winking face': '😉',
        'smiling cat face with open mouth': '😺',
        'grinning cat face with smiling eyes': '😸',
        'cat face with tears of joy': '😹',
        'kissing cat face with closed eyes': '😽',
        'smiling cat face with heart-shaped eyes': '😻',
        'crying cat face': '😿',
        'pouting cat face': '😾',
        'cat face with wry smile': '😼',
        'weary cat face': '🙀',
        'face with no good gesture': '🙅',
        'face with ok gesture': '🙆',
        'person bowing deeply': '🙇',
        'see-no-evil monkey': '🙈',
        'speak-no-evil monkey': '🙊',
        'hear-no-evil monkey': '🙉',
        'happy person raising one hand': '🙋',
        'person raising both hands in celebration': '🙌',
        'person frowning': '🙍',
        'person with pouting face': '🙎',
        'person with folded hands': '🙏',
        'house building': '🏠',
        'house with garden': '🏡',
        'office building': '🏢',
        'japanese post office': '🏣',
        hospital: '🏥',
        bank: '🏦',
        'automated teller machine': '🏧',
        hotel: '🏨',
        'love hotel': '🏩',
        'convenience store': '🏪',
        school: '🏫',
        church: '⛪',
        fountain: '⛲',
        'department store': '🏬',
        'japanese castle': '🏯',
        'european castle': '🏰',
        factory: '🏭',
        anchor: '⚓',
        'izakaya lantern': '🏮',
        'mount fuji': '🗻',
        'tokyo tower': '🗼',
        'statue of liberty': '🗽',
        'silhouette of japan': '🗾',
        moyai: '🗿',
        'mans shoe': '👞',
        'athletic shoe': '👟',
        'high-heeled shoe': '👠',
        'womans sandal': '👡',
        'womans boots': '👢',
        footprints: '👣',
        eyeglasses: '👓',
        't-shirt': '👕',
        jeans: '👖',
        crown: '👑',
        necktie: '👔',
        'womans hat': '👒',
        dress: '👗',
        kimono: '👘',
        bikini: '👙',
        'womans clothes': '👚',
        purse: '👛',
        handbag: '👜',
        pouch: '👝',
        'money bag': '💰',
        'currency exchange': '💱',
        'chart with upwards trend and yen sign': '💹',
        'heavy dollar sign': '💲',
        'credit card': '💳',
        'banknote with yen sign': '💴',
        'banknote with dollar sign': '💵',
        'money with wings': '💸',
        'regional indicator symbol letters cn': '🇨🇳',
        'regional indicator symbol letters de': '🇩🇪',
        'regional indicator symbol letters es': '🇪🇸',
        'regional indicator symbol letters fr': '🇫🇷',
        'regional indicator symbol letters gb': '🇬🇧',
        'regional indicator symbol letters it': '🇮🇹',
        'regional indicator symbol letters jp': '🇯🇵',
        'regional indicator symbol letters kr': '🇰🇷',
        'regional indicator symbol letters ru': '🇷🇺',
        'regional indicator symbol letters us': '🇺🇸',
        fire: '🔥',
        'electric torch': '🔦',
        wrench: '🔧',
        hammer: '🔨',
        'nut and bolt': '🔩',
        hocho: '🔪',
        pistol: '🔫',
        'crystal ball': '🔮',
        'six pointed star with middle dot': '🔯',
        'japanese symbol for beginner': '🔰',
        'trident emblem': '🔱',
        syringe: '💉',
        pill: '💊',
        'negative squared latin capital letter a': '🅰',
        'negative squared latin capital letter b': '🅱',
        'negative squared ab': '🆎',
        'negative squared latin capital letter o': '🅾',
        ribbon: '🎀',
        'wrapped present': '🎁',
        'birthday cake': '🎂',
        'christmas tree': '🎄',
        'father christmas': '🎅',
        'crossed flags': '🎌',
        fireworks: '🎆',
        balloon: '🎈',
        'party popper': '🎉',
        'pine decoration': '🎍',
        'japanese dolls': '🎎',
        'graduation cap': '🎓',
        'school satchel': '🎒',
        'carp streamer': '🎏',
        'firework sparkler': '🎇',
        'wind chime': '🎐',
        'jack-o-lantern': '🎃',
        'confetti ball': '🎊',
        'tanabata tree': '🎋',
        'moon viewing ceremony': '🎑',
        pager: '📟',
        'black telephone': '☎',
        'telephone receiver': '📞',
        'mobile phone': '📱',
        'mobile phone with rightwards arrow at left': '📲',
        memo: '📝',
        'fax machine': '📠',
        envelope: '✉',
        'incoming envelope': '📨',
        'envelope with downwards arrow above': '📩',
        'closed mailbox with lowered flag': '📪',
        'closed mailbox with raised flag': '📫',
        postbox: '📮',
        newspaper: '📰',
        'public address loudspeaker': '📢',
        'cheering megaphone': '📣',
        'satellite antenna': '📡',
        'outbox tray': '📤',
        'inbox tray': '📥',
        package: '📦',
        'e-mail symbol': '📧',
        'input symbol for latin capital letters': '🔠',
        'input symbol for latin small letters': '🔡',
        'input symbol for numbers': '🔢',
        'input symbol for symbols': '🔣',
        'input symbol for latin letters': '🔤',
        'black nib': '✒',
        seat: '💺',
        'personal computer': '💻',
        pencil: '✏',
        paperclip: '📎',
        briefcase: '💼',
        minidisc: '💽',
        'floppy disk': '💾',
        'optical disc': '💿',
        dvd: '📀',
        'black scissors': '✂',
        'round pushpin': '📍',
        'page with curl': '📃',
        'page facing up': '📄',
        calendar: '📅',
        'file folder': '📁',
        'open file folder': '📂',
        notebook: '📓',
        'open book': '📖',
        'notebook with decorative cover': '📔',
        'closed book': '📕',
        'green book': '📗',
        'blue book': '📘',
        'orange book': '📙',
        books: '📚',
        'name badge': '📛',
        scroll: '📜',
        clipboard: '📋',
        'tear-off calendar': '📆',
        'bar chart': '📊',
        'chart with upwards trend': '📈',
        'chart with downwards trend': '📉',
        'card index': '📇',
        pushpin: '📌',
        ledger: '📒',
        'straight ruler': '📏',
        'triangular ruler': '📐',
        'bookmark tabs': '📑',
        'running shirt with sash': '🎽',
        baseball: '⚾',
        'flag in hole': '⛳',
        'tennis racquet and ball': '🎾',
        'soccer ball': '⚽',
        'ski and ski boot': '🎿',
        'basketball and hoop': '🏀',
        'chequered flag': '🏁',
        snowboarder: '🏂',
        runner: '🏃',
        surfer: '🏄',
        trophy: '🏆',
        'american football': '🏈',
        swimmer: '🏊',
        'railway car': '🚃',
        metro: '🚇',
        'circled latin capital letter m': 'Ⓜ',
        'high-speed train': '🚄',
        'high-speed train with bullet nose': '🚅',
        automobile: '🚗',
        'recreational vehicle': '🚙',
        bus: '🚌',
        'bus stop': '🚏',
        ship: '🚢',
        airplane: '✈',
        sailboat: '⛵',
        station: '🚉',
        rocket: '🚀',
        speedboat: '🚤',
        taxi: '🚕',
        'delivery truck': '🚚',
        'fire engine': '🚒',
        ambulance: '🚑',
        'police car': '🚓',
        'fuel pump': '⛽',
        'negative squared latin capital letter p': '🅿',
        'horizontal traffic light': '🚥',
        'construction sign': '🚧',
        'police cars revolving light': '🚨',
        'hot springs': '♨',
        tent: '⛺',
        'carousel horse': '🎠',
        'ferris wheel': '🎡',
        'roller coaster': '🎢',
        'fishing pole and fish': '🎣',
        microphone: '🎤',
        'movie camera': '🎥',
        cinema: '🎦',
        headphone: '🎧',
        'artist palette': '🎨',
        'top hat': '🎩',
        'circus tent': '🎪',
        ticket: '🎫',
        'clapper board': '🎬',
        'performing arts': '🎭',
        'video game': '🎮',
        'mahjong tile red dragon': '🀄',
        'direct hit': '🎯',
        'slot machine': '🎰',
        billiards: '🎱',
        'game die': '🎲',
        bowling: '🎳',
        'flower playing cards': '🎴',
        'playing card black joker': '🃏',
        'musical note': '🎵',
        'multiple musical notes': '🎶',
        saxophone: '🎷',
        guitar: '🎸',
        'musical keyboard': '🎹',
        trumpet: '🎺',
        violin: '🎻',
        'musical score': '🎼',
        'part alternation mark': '〽',
        camera: '📷',
        'video camera': '📹',
        television: '📺',
        radio: '📻',
        videocassette: '📼',
        'kiss mark': '💋',
        'love letter': '💌',
        ring: '💍',
        'gem stone': '💎',
        kiss: '💏',
        bouquet: '💐',
        'couple with heart': '💑',
        wedding: '💒',
        'no one under eighteen symbol': '🔞',
        'copyright sign': '©',
        'registered sign': '®',
        'trade mark sign': '™',
        'information source': 'ℹ',
        'hash key': '#⃣',
        'keycap 1': '1⃣',
        'keycap 2': '2⃣',
        'keycap 3': '3⃣',
        'keycap 4': '4⃣',
        'keycap 5': '5⃣',
        'keycap 6': '6⃣',
        'keycap 7': '7⃣',
        'keycap 8': '8⃣',
        'keycap 9': '9⃣',
        'keycap 0': '0⃣',
        'keycap ten': '🔟',
        'antenna with bars': '📶',
        'vibration mode': '📳',
        'mobile phone off': '📴',
        hamburger: '🍔',
        'rice ball': '🍙',
        shortcake: '🍰',
        'steaming bowl': '🍜',
        bread: '🍞',
        cooking: '🍳',
        'soft ice cream': '🍦',
        'french fries': '🍟',
        dango: '🍡',
        'rice cracker': '🍘',
        'cooked rice': '🍚',
        spaghetti: '🍝',
        'curry and rice': '🍛',
        oden: '🍢',
        sushi: '🍣',
        'bento box': '🍱',
        'pot of food': '🍲',
        'shaved ice': '🍧',
        'meat on bone': '🍖',
        'fish cake with swirl design': '🍥',
        'roasted sweet potato': '🍠',
        'slice of pizza': '🍕',
        'poultry leg': '🍗',
        'ice cream': '🍨',
        doughnut: '🍩',
        cookie: '🍪',
        'chocolate bar': '🍫',
        candy: '🍬',
        lollipop: '🍭',
        custard: '🍮',
        'honey pot': '🍯',
        'fried shrimp': '🍤',
        'fork and knife': '🍴',
        'hot beverage': '☕',
        'cocktail glass': '🍸',
        'beer mug': '🍺',
        'teacup without handle': '🍵',
        'sake bottle and cup': '🍶',
        'wine glass': '🍷',
        'clinking beer mugs': '🍻',
        'tropical drink': '🍹',
        'north east arrow': '↗',
        'south east arrow': '↘',
        'north west arrow': '↖',
        'south west arrow': '↙',
        'arrow pointing rightwards then curving upwards': '⤴',
        'arrow pointing rightwards then curving downwards': '⤵',
        'left right arrow': '↔',
        'up down arrow': '↕',
        'upwards black arrow': '⬆',
        'downwards black arrow': '⬇',
        'black rightwards arrow': '➡',
        'leftwards black arrow': '⬅',
        'black right-pointing triangle': '▶',
        'black left-pointing triangle': '◀',
        'black right-pointing double triangle': '⏩',
        'black left-pointing double triangle': '⏪',
        'black up-pointing double triangle': '⏫',
        'black down-pointing double triangle': '⏬',
        'up-pointing red triangle': '🔺',
        'down-pointing red triangle': '🔻',
        'up-pointing small red triangle': '🔼',
        'down-pointing small red triangle': '🔽',
        'heavy large circle': '⭕',
        'cross mark': '❌',
        'negative squared cross mark': '❎',
        'heavy exclamation mark symbol': '❗',
        'exclamation question mark': '⁉',
        'double exclamation mark': '‼',
        'black question mark ornament': '❓',
        'white question mark ornament': '❔',
        'white exclamation mark ornament': '❕',
        'wavy dash': '〰',
        'curly loop': '➰',
        'double curly loop': '➿',
        'heavy black heart': '❤',
        'beating heart': '💓',
        'broken heart': '💔',
        'two hearts': '💕',
        'sparkling heart': '💖',
        'growing heart': '💗',
        'heart with arrow': '💘',
        'blue heart': '💙',
        'green heart': '💚',
        'yellow heart': '💛',
        'purple heart': '💜',
        'heart with ribbon': '💝',
        'revolving hearts': '💞',
        'heart decoration': '💟',
        'black heart suit': '♥',
        'black spade suit': '♠',
        'black diamond suit': '♦',
        'black club suit': '♣',
        'smoking symbol': '🚬',
        'no smoking symbol': '🚭',
        'wheelchair symbol': '♿',
        'triangular flag on post': '🚩',
        'warning sign': '⚠',
        'no entry': '⛔',
        'black universal recycling symbol': '♻',
        bicycle: '🚲',
        pedestrian: '🚶',
        'mens symbol': '🚹',
        'womens symbol': '🚺',
        bath: '🛀',
        restroom: '🚻',
        toilet: '🚽',
        'water closet': '🚾',
        'baby symbol': '🚼',
        door: '🚪',
        'no entry sign': '🚫',
        'heavy check mark': '✔',
        'squared cl': '🆑',
        'squared cool': '🆒',
        'squared free': '🆓',
        'squared id': '🆔',
        'squared new': '🆕',
        'squared ng': '🆖',
        'squared ok': '🆗',
        'squared sos': '🆘',
        'squared up with exclamation mark': '🆙',
        'squared vs': '🆚',
        'squared katakana koko': '🈁',
        'squared katakana sa': '🈂',
        'squared cjk unified ideograph-7981': '🈲',
        'squared cjk unified ideograph-7a7a': '🈳',
        'squared cjk unified ideograph-5408': '🈴',
        'squared cjk unified ideograph-6e80': '🈵',
        'squared cjk unified ideograph-6709': '🈶',
        'squared cjk unified ideograph-7121': '🈚',
        'squared cjk unified ideograph-6708': '🈷',
        'squared cjk unified ideograph-7533': '🈸',
        'squared cjk unified ideograph-5272': '🈹',
        'squared cjk unified ideograph-6307': '🈯',
        'squared cjk unified ideograph-55b6': '🈺',
        'circled ideograph secret': '㊙',
        'circled ideograph congratulation': '㊗',
        'circled ideograph advantage': '🉐',
        'circled ideograph accept': '🉑',
        'heavy plus sign': '➕',
        'heavy minus sign': '➖',
        'heavy multiplication x': '✖',
        'heavy division sign': '➗',
        'diamond shape with a dot inside': '💠',
        'electric light bulb': '💡',
        'anger symbol': '💢',
        bomb: '💣',
        'sleeping symbol': '💤',
        'collision symbol': '💥',
        'splashing sweat symbol': '💦',
        droplet: '💧',
        'dash symbol': '💨',
        'pile of poo': '💩',
        'flexed biceps': '💪',
        'dizzy symbol': '💫',
        'speech balloon': '💬',
        sparkles: '✨',
        'eight pointed black star': '✴',
        'eight spoked asterisk': '✳',
        'medium white circle': '⚪',
        'medium black circle': '⚫',
        'large red circle': '🔴',
        'large blue circle': '🔵',
        'black square button': '🔲',
        'white square button': '🔳',
        'white medium star': '⭐',
        'white large square': '⬜',
        'black large square': '⬛',
        'white small square': '▫',
        'black small square': '▪',
        'white medium small square': '◽',
        'black medium small square': '◾',
        'white medium square': '◻',
        'black medium square': '◼',
        'large orange diamond': '🔶',
        'large blue diamond': '🔷',
        'small orange diamond': '🔸',
        'small blue diamond': '🔹',
        sparkle: '❇',
        'white flower': '💮',
        'hundred points symbol': '💯',
        'leftwards arrow with hook': '↩',
        'rightwards arrow with hook': '↪',
        'clockwise downwards and upwards open circle arrows': '🔃',
        'speaker with three sound waves': '🔊',
        battery: '🔋',
        'electric plug': '🔌',
        'left-pointing magnifying glass': '🔍',
        'right-pointing magnifying glass': '🔎',
        lock: '🔒',
        'open lock': '🔓',
        'lock with ink pen': '🔏',
        'closed lock with key': '🔐',
        key: '🔑',
        bell: '🔔',
        'ballot box with check': '☑',
        'radio button': '🔘',
        bookmark: '🔖',
        'link symbol': '🔗',
        'back with leftwards arrow above': '🔙',
        'end with leftwards arrow above': '🔚',
        'on with exclamation mark with left right arrow above': '🔛',
        'soon with rightwards arrow above': '🔜',
        'top with upwards arrow above': '🔝',
        'white heavy check mark': '✅',
        'raised fist': '✊',
        'raised hand': '✋',
        'victory hand': '✌',
        'fisted hand sign': '👊',
        'thumbs up sign': '👍',
        'white up pointing index': '☝',
        'white up pointing backhand index': '👆',
        'white down pointing backhand index': '👇',
        'white left pointing backhand index': '👈',
        'white right pointing backhand index': '👉',
        'waving hand sign': '👋',
        'clapping hands sign': '👏',
        'ok hand sign': '👌',
        'thumbs down sign': '👎',
        'open hands sign': '👐',
        'horse racer': '🏇',
        'rugby football': '🏉',
        'babby bottle': '🍼',
        pear: '🍐',
        'sun with face': '🌞',
        'full moon with face': '🌝',
        'last quarter moon with face': '🌜',
        'new moon with face': '🌚',
        'waning crescent moon symbol': '🌘',
        'last quarter moon symbol': '🌗',
        'waning gibbous moon symbol': '🌖',
        'waxing crescent moon symbol': '🌒',
        'globe with meridians': '🌐',
        'earth globe americas': '🌎',
        'earth globe europe-africa': '🌍',
        'european post office': '🏤',
        ram: '🐏',
        goat: '🐐',
        rooster: '🐓',
        dog: '🐕',
        pig: '🐖',
        'dromedary camel': '🐪',
        'busts in silhouette': '👥',
        'thought balloon': '💭',
        'banknote with euro sign': '💶',
        'banknote with pound sign': '💷',
        'open mailbox with raised flag': '📬',
        'open mailbox with lowered flag': '📭',
        'postal horn': '📯',
        'no mobile phones': '📵',
        'twisted rightwards arrows': '🔀',
        'clockwise rightwards and leftwards open circle arrows': '🔁',
        'clockwise rightwards and leftwards open circle arrows with circled one overlay': '🔂',
        'anticlockwise downwards and upwards open circle arrows': '🔄',
        'low brightness symbol': '🔅',
        'high brightness symbol': '🔆',
        'speaker with cancellation stroke': '🔇',
        'speaker with one sound wave': '🔉',
        'bell with cancellation stroke': '🔕',
        microscope: '🔬',
        telescope: '🔭',
        'clock face one-thirty': '🕜',
        'clock face two-thirty': '🕝',
        'clock face three-thirty': '🕞',
        'clock face four-thirty': '🕟',
        'clock face five-thirty': '🕠',
        'clock face six-thirty': '🕡',
        'clock face seven-thirty': '🕢',
        'clock face eight-thirty': '🕣',
        'clock face nine-thirty': '🕤',
        'clock face ten-thirty': '🕥',
        'clock face eleven-thirty': '🕦',
        'smiling face with halo': '😇',
        'smiling face with horns': '😈',
        'neutral face': '😐',
        'expressionless face': '😑',
        'confused face': '😕',
        'kissing face': '😗',
        'face with stuck-out tongue': '😛',
        'worried face': '😟',
        'frowning face with open mouth': '😦',
        'anguished face': '😧',
        'grimacing face': '😬',
        'face with open mouth': '😮',
        'hushed face': '😯',
        'sleeping face': '😴',
        'face without mouth': '😶',
        helicopter: '🚁',
        'steam locomotive': '🚂',
        train: '🚆',
        'light rail': '🚈',
        trolleybus: '🚎',
        'oncoming bus': '🚍',
        minibus: '🚐',
        'oncoming police car': '🚔',
        'oncoming taxi': '🚖',
        'oncoming automobile': '🚘',
        'articulated lorry': '🚛',
        tractor: '🚜',
        monorail: '🚝',
        'mountain railway': '🚞',
        'suspension railway': '🚟',
        'mountain cableway': '🚠',
        'aerial tramway': '🚡',
        rowboat: '🚣',
        'vertical traffic light': '🚦',
        'put litter in its place symbol': '🚮',
        'do not litter symbol': '🚯',
        'potable water symbol': '🚰',
        'non-potable water symbol': '🚱',
        'no bicycles': '🚳',
        bicyclist: '🚴',
        'mountain bicyclist': '🚵',
        'no pedestrians': '🚷',
        'children crossing': '🚸',
        shower: '🚿',
        bathtub: '🛁',
        'passport control': '🛂',
        customs: '🛃',
        'baggage claim': '🛄',
        'left luggage': '🛅',
        'kissing face with smiling eyes': '😙',
        tram: '🚊'
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = map;
});
//# sourceMappingURL=index.js.map