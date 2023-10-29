export class Api {
    private static BASE_URL: string = `https://min-api.cryptocompare.com/data/price?`;
    private static BASE_PARAM_CRYPTO: string = `fsym=`;
    private static BASE_PARAM_DEVISE: string = `tsyms=`;
    private static BASE_FEED_URL: string = `https://min-api.cryptocompare.com/data/v2/news/?lang=EN`;
    private static BASE_RSS_URL: string = `https://api.rss2json.com/v1/api.json?rss_url=`;

    static async request(crypto: string, devise: string) {
        return fetch(`${this.BASE_URL}${this.BASE_PARAM_CRYPTO}${crypto}&${this.BASE_PARAM_DEVISE}${devise}`)
            .then(response => response.json())
            .then(data => data[devise])
            .catch(error => console.log(error));
    }

    static async getFeed(limit: number) {
        return fetch(`${this.BASE_FEED_URL}`)
            .then(response => response.json())
            .then(data => (data.Data).slice(0, limit))
            .catch(error => console.log(error));
    }




}