export class Product {
    // ProductDTO in POS
    private id: number;

    // nombre de campos igual a dto de backend. json
    constructor(private code: string, private description: string) {
    }

    set setId(_id: number) {
        this.id = _id;
    }

    get getId() {
        return this.id;
    }
}
