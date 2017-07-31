export class SerializationHelper {
    static toInstance<T>(obj: T, json: string): T {
        const jsonObj = JSON.parse(json);
        if (typeof obj['fromJSON'] === 'function') {
            obj['fromJSON'](jsonObj);
        }else {
            // tslint:disable-next-line:forin
            for (const propName in jsonObj) {
                obj[propName] = jsonObj[propName];
            }
        }

        return obj;
    }
}
