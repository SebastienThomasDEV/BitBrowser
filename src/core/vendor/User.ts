import Application from "./Application";

export class User {
    name: string;
    email: string;
    password: string;
    plainPassword: string;

    constructor(name: string, email: string, password: string, plainPassword: string) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.plainPassword = plainPassword;
    }
}