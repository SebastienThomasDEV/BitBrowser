export class AbstractModule {
    panel: HTMLElement;
    context: string = window.location.hash.replace('#', '');


    constructor() {
        this.getPanel();
    }
    getPanel() {
        this.panel = document.getElementById('panel') as HTMLElement;
    }

}