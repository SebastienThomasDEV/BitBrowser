import Chart from "chart.js/auto";
import {Api} from "../../core/vendor/Api";
import ComponentManager from "../../core/vendor/ComponentManager";
import {AbstractModule} from "../../core/vendor/AbtractModule";
export class FeedModule extends AbstractModule{
    context: string = 'feed';
    constructor() {
        super();
        this.init();
    }

    init() {
        console.log('Feed module initialized')
        ComponentManager.loadComponent(this.context, 'card').then(html => {
            Api.getFeed().then(data => {
                console.log(data);
                data.forEach(item => {
                    let container = document.getElementById('container') as HTMLElement;
                    ComponentManager.bind(item, html).then(result => {
                        container.insertAdjacentHTML('beforeend', result);
                    })
                })
            })
        })
    }
}