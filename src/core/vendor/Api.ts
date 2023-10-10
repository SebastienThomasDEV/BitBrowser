export class Api {
    private static BASE_URL: string = `https://min-api.cryptocompare.com/data/price?`;
    private static BASE_PARAM_CRYPTO: string = `fsym=`;
    private static BASE_PARAM_DEVISE: string = `tsyms=`;

    static async request(crypto: string, devise: string) {
        return fetch(`${this.BASE_URL}${this.BASE_PARAM_CRYPTO}${crypto}&${this.BASE_PARAM_DEVISE}${devise}`)
            .then(response => response.json())
            .then(data => data[devise])
            .catch(error => console.log(error));
    }

}