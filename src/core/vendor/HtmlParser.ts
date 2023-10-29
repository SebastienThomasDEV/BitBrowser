export default class HtmlParser {


    static async load(path: string) {
        return await fetch(`./templates/${path}`)
            .then(response => response.text())
    }

    // @ts-ignore
    static async seek(html: string) {
        const regex = new RegExp(`\{@component name='(.*)' src='(.*)' class='(.*)'\}`, 'g');
        let found = regex.exec(html);
        if (found) {
            return await this.create(this.load(found[2]), found[1], found[3])
        }
    }



    static bind(json: any, html: string, events?: any) {
        let result = html;
        for (let key in json) {
            let element = json[key];
            // pipe date to format
            let regex = new RegExp(`{{${key}\\|(.*)}}`, 'g');
            let match = regex.exec(result);
            if (match) {
                if (match[1] === 'date') {
                    let date = new Date(element * 1000);
                    result = result.replace(match[0], date.toLocaleDateString());
                }
                if (match[1] === 'upper') {
                    result = result.replace(match[0], element.toUpperCase());
                }
                if (match[1] === 'lower') {
                    result = result.replace(match[0], element.toLowerCase());
                }
                if (match[1] === 'capitalize') {
                    result = result.replace(match[0], element.charAt(0).toUpperCase() + element.slice(1));
                }
                if (match[1] === 'currency') {
                    result = result.replace(match[0], element.toFixed(2));
                }
            }
            result = result.replace(new RegExp(`{{${key}}}`, 'g'), element);
        }
        return result;
    }

    static async render(json: any, html: string, events?: any) {
        return this.bind(json, html, events);
    }

    static async create(html: Promise<string>, name: string, classList?: string) {
        let element = document.createElement('div');
        element.setAttribute('id', name);
        element.insertAdjacentHTML('beforeend',await html);
        if (classList) {
            classList.split(' ').forEach((className: string) => {
                element.classList.add(className);
            })
        }
        return element;
    }


}