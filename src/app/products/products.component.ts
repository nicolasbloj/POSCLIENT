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

    this.hidden = true;

    let product: Product = null;

    this.products.map(function (p) {
      console.log(aproduct.getId);
      console.log(p);
      if (p.getId === aproduct.getId) {
        product = p;
      }
    });

    if (aproduct !== undefined) {
      const index = this.products.indexOf(product);

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
