import {User} from "./User";
export class Auth {
    private static BASE_URL: string = `./database/users.database.json`;
    static login(user: User): Promise<void>{
        return fetch(this.BASE_URL)
            .then(response => response.json())
            .then(data => {
                const match = data.users.find((item: User) => item.email === user.email && item.password === user.password);
                if (match) {
                    console.info('User logged in');
                    localStorage.setItem('user', JSON.stringify(match.email));
                    localStorage.setItem('isLogged', 'true');
                } else {
                    console.error('User not found');
                }
            } )
            .catch(error => console.log(error));
    }

    static register(user: User) {
        return fetch(this.BASE_URL)
            .then(response => response.json())
            .then(data => {
                if (data[user.email]) {
                    console.log('User already exist');
                } else {
                    data[user.email] = user;
                    console.log('User registered');
                }
            } )
            .catch(error => console.log(error));
    }
}