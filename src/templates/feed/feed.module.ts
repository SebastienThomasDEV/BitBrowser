import Chart from "chart.js/auto";
import {Api} from "../../core/vendor/Api";
import {AbstractModule} from "../../core/vendor/AbtractModule";
import HtmlParser from "../../core/vendor/HtmlParser";

export class FeedModule extends AbstractModule {
    context: string = 'feed';

    constructor() {
        super();
        this.init();
    }

    init() {
        Api.getFeed(20).then(data => {
            console.log(data);
        })
        console.log(document.body.innerHTML);
        HtmlParser.seek(document.body.innerHTML).then(element => {
            console.log(element);
        })
    }


}