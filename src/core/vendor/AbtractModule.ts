export class AbstractModule {
    panel: HTMLElement;
    constructor() {
        this.getPanel();
    }
    getPanel() {
        this.panel = document.getElementById('panel') as HTMLElement;
    }

}