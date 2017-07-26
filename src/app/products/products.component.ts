import { Component, OnInit } from '@angular/core';

import { Product } from '../_model/product.model';

@Component({
  selector: 'nab-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor() { }

  ngOnInit() {
  }

  addProduct(aproduct: Product): void {
    this.products.push(aproduct);
  }

  setProducts(products: Product[]): void {
    this.products = products;
  }

}
