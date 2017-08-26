import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TSMap } from 'typescript-map';
import { ProductService } from '../_service/product.service';
import { Product } from '../../_model/product.model';

declare var jQuery: any;


@Component({
  selector: 'nab-products-list',
  templateUrl: './products-list.component.html',
  styles: []
})
export class ProductsListComponent implements OnInit {

  positionToUpdate: number = -1;

  resp: TSMap<string, number>;
  message = '';
  id: number;

  products: Product[];

  @Output()
  emitter = new EventEmitter<Product[]>();
  @Output()
  emitter2 = new EventEmitter<Product>();

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    // TRAE NUEVAMENTE CADA VEZ QUE ENTRAMOS EN PRODUCT, ENTONCES
    // SI MODIFICAMOS PRODUCTOS NO NOS VA A QUEDAR ORDENADO POR ID.
    this._productService.list().subscribe(
      _data => {
        this.products = _data;
        this.emitter.emit(this.products);
      });

  }

  // on enter key into ChangePositionModal
  changeItemPosition(event: any, positionNew0: any) {

    const positionNew: number = Number(positionNew0);

    // if (event.key === 'Enter') { // No es necesario ya que usamos (keyup.enter) en <input ...>

    if (positionNew >= 0 && positionNew < this.products.length) { // && o &  ?

      const productToUpdatePosition: Product = this.products[this.positionToUpdate];

      if ((positionNew) < this.positionToUpdate) {
        // Desplazar para abajo!
        let product_initial: Product;
        let product_next: Product;
        for (let i: number = positionNew; i < this.positionToUpdate; i = i + 1) {

          if (i === positionNew) {
            product_initial = this.products[i];
            this.products[i] = productToUpdatePosition;
          }

          product_next = this.products[(i + 1)];
          this.products[i + 1] = product_initial;
          product_initial = product_next;

        }

      } else {
        // Desplazar para arriba
        let product_initial: Product;
        let product_next: Product;

        for (let i: number = positionNew; i > this.positionToUpdate; i = i - 1) {

          if (i === positionNew) {
            product_initial = this.products[i];
            this.products[i] = productToUpdatePosition;
          }

          product_next = this.products[i - 1];
          this.products[i - 1] = product_initial;
          product_initial = product_next;

        }

      }
      jQuery('#changePositionModal').modal('toggle');
    }
    // }

  }

  up(index: number): void {
    const productToUp: Product = this.products[index];
    const productToDown: Product = this.products[index - 1];
    if ((index - 1) >= 0) {
      this.products[index - 1] = productToUp;
      this.products[index] = productToDown;
    }
  }

  down(index: number): void {
    const productToUp: Product = this.products[index + 1];
    const productToDown: Product = this.products[index];
    if ((index + 1) < this.products.length) {
      this.products[index + 1] = productToDown;
      this.products[index] = productToUp;
    }
  }

  deleteProduct(index: number) {

    this._productService.delete(this.products[index]).subscribe(
      (data) => {

        // el controller en backend devulve map<mensaje,id>
        this.resp = data;

        const m: any[] = this.resp.map(function (value, key) {
          return key;
        });

        const i: any[] = this.resp.map(function (value, key) {
          return value;
        });

        this.message = m[0];
        this.id = i[0];

        this.products.splice(index, 1);

      },
      error => this.message = 'Error al cargar producto'
    );

  }

  editProduct(index: number) {
    console.log('product-list.component -> editProduct');
    console.log('index : ' + index);

    const productAux: Product = this.products[index];

    console.log('product : ' + productAux);

    console.log('product.code : ' + productAux.getCode);

    const product: Product =
      new Product(
        productAux.getCode,
        productAux.getDescription,
        productAux.getId
      );

    // Al parecer, para usar product={c,d,i} tengo que tener variables publicas.

    this.emitter2.emit(product);

    // la eliminacion en el array la hacemos una vez que nos aseguremos que se
    // eliminó correctamente desde el endpoint
  }

}
