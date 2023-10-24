import Chart from "chart.js/auto";
import {AbstractModule} from "../../core/vendor/AbtractModule";
export class StudiesModule extends AbstractModule{
    constructor() {
        super();
        this.init();
    }

    init() {
        console.log('Studies module initialized')
    }
}