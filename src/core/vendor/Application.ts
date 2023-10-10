import {Api} from "./Api";
import {Auth} from "./Auth";
import {User} from "./User";
import Chart from "chart.js/auto";
import {LINE_CHART} from "../chart/line_chart";


export default class Application {
    private api = Api;
    private auth = Auth;
    private user = User;
    view: string = '';

    constructor() {
        this.init();
    }


    init() {
        this.auth.login(new User('John Doe', 'johndoe@email.com', 'root', 'root'));
        this.guard();
        this.dispatch(this.view);
        onhashchange = () => {
            this.guard();
            this.view = window.location.hash.replace('#', '');
            localStorage.setItem('view', this.view);
            this.dispatch(this.view);
        }
    }

    wrap(html: string) {
        const panel = document.getElementById('panel');
        panel.innerHTML = html;
        const ctx = document.getElementById('myChart') as HTMLCanvasElement;
        const myChart = new Chart(ctx, LINE_CHART);
    }

    async dispatch(pathname: string) {
        return await fetch(`./templates/${pathname}/${pathname}.html`)
            .then(response => response.text())
            .then(data => {this.wrap(data)})
    }

    guard() {
        if (localStorage.getItem('isLogged') === 'true') {
            if (localStorage.getItem('view')) {
                this.view = localStorage.getItem('view') as string;
            } else {
                window.location.hash = 'home';
                this.view = window.location.hash.replace('#', '')
            }
        } else {
            window.location.hash = 'login';
            this.view = window.location.hash.replace('#', '')
        }
    }


}