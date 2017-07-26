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

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.list().subscribe(
      _data => {
        this.products = _data; this.emitter.emit(this.products);
      });
  }


}
