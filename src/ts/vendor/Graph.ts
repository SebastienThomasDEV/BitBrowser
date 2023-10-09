export class Graph {
    devise: string;
    crypto: string;
    element: HTMLElement;

    constructor(devise: string, crypto: string)   {
        this.devise = devise;
        this.crypto = crypto;
        this.init();
    }

    init() {
        this.element = document.createElement('canvas');
        this.element.classList.add('graph');

    }
}