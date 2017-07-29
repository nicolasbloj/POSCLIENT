export class Product {
    // ProductDTO in POS

    // nombre de campos igual a dto de backend. json
    constructor(private code: string, private description: string, private id?: number) {
    }
    
    set setId(_id: number) {
        this.id = _id;
    }
    
    /*set seCode(_code: string) {
        this.code= _code;
    }*/
 

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
