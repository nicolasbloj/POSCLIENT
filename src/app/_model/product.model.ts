export class Product {
    // ProductDTO in POS

    // nombre de campos igual a dto de backend. json

    // code: string, description: string, id?: number => product-list
    // code: string, description: string ==> usamos de esta manera para setear un
    // producto inciial en product-edit
    constructor(code: string, description: string, id?: number);
    // Constructor vacio para hacer conversion json to product
    constructor();
    // implementacion :
    constructor(private code?: string, private description?: string, private id?: number) {
    }

    // set text into label in product-edit
    set setId(_id: number) {
        this.id = _id;
    }

    set setCode(_code: string) {
        this.code = _code;
    }

    set setDescription(_description: string) {
        this.description = _description;
    }

    get getId(): number {
        return this.id;
    }
    get getCode(): string {
        return this.code;
    }
    get getDescription(): string {
        return this.description;
    }

}
