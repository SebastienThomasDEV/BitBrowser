import {Api} from "./Api";
import {Auth} from "./Auth";
import {User} from "./User";


export default class Application {
    private api = Api;
    private auth = Auth;
    private user = User;
    view: string = '';

    constructor() {
        this.init();
    }


    init() {
        if (localStorage.getItem('view')) {
            this.view = localStorage.getItem('view') as string;
        } else {
            window.location.hash = 'home';
            this.view = window.location.hash.replace('#', '')
        }
        this.dispatch(this.view);
        window.addEventListener('hashchange', (e) => {
            this.view = window.location.hash.replace('#', '');
            localStorage.setItem('view', this.view);
            this.dispatch(this.view);
        });
        this.auth.login(new User('John Doe', 'johndoe@email.com', 'root', 'root'));
        return this;
    }

    wrap(html: string) {
        const panel = document.getElementById('panel');
        panel.innerHTML = html;
    }

    async dispatch(pathname: string) {
        return await fetch(`./templates/${pathname}/${pathname}.html`)
            .then(response => response.text())
            .then(data => {this.wrap(data)})
    }

    persist() {

    }


}