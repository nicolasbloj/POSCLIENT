import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ProductService } from '../_service/product.service';
import { Product } from '../../_model/product.model';

@Component({
  selector: 'nab-products-list',
  templateUrl: './products-list.component.html',
  styles: []
})
export class ProductsListComponent implements OnInit {

  products: Product[];

  @Output()
  emitter = new EventEmitter<Product[]>();
  @Output()
  emitter2 = new EventEmitter<Product>();

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.list().subscribe(
      _data => {
        this.products = _data; this.emitter.emit(this.products);
      });
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
