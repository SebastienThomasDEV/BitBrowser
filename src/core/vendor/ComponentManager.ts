export default class ComponentManager {
    static async loadComponent(context: string, componentName: string) {
        return await fetch(`./templates/${context}/components/${componentName}.html`)
            .then(response => response.text()).then(data => data)
    }

    static async bind(json: any, html: string) {
        let result = html;
        for (const key in json) {
            result = result.replace(`{{${key}}}`, json[key]);
        }
        return result;
    }
}