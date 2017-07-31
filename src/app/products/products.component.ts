import { Component, OnInit } from '@angular/core';

import { Product } from '../_model/product.model';

@Component({
  selector: 'nab-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {

  hidden = true;

  productToUpdate: Product;

  products: Product[];

  constructor() { }

  ngOnInit() {
  }

  addProduct(aproduct: Product): void {
    this.products.push(aproduct);
  }

  updateProduct(aproduct: Product): void {
    // si el producto fue actualizado entonces actualizar en array.
    // no hay problema ya que lo hacemos dentro del subscribe
    console.log('products.component -> updateProduct');
    console.log('aproduct : ' + aproduct);

    this.hidden = true;

    let index = -1;

    for (let i = 0 ; i < this.products.length; i = i + 1) {
      if (this.products[i].getId === aproduct.getId) {
        index = i;
        break;
      }
    }

    console.log('index : ' + index);

    if (aproduct !== undefined) {
      if (index !== -1) {
        this.products[index] = aproduct;
      }
    }
  }

  setProducts(products: Product[]): void {
    this.products = products;
  }

  setProductToUpdate(product: Product): void {
    this.hidden = false;
    this.productToUpdate = product;
    console.log('product.component -> setProductToUpdate');
    console.log(this.productToUpdate);
  }



}
