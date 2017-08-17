import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TSMap } from 'typescript-map';
import { ProductService } from '../_service/product.service';
import { Product } from '../../_model/product.model';

@Component({
  selector: 'nab-doc-products-list',
  templateUrl: './doc-products-list.component.html',
  styles: []
})
export class DocProductsListComponent implements OnInit {

  products: Product[];


  @Output()
  emitter = new EventEmitter<Product>();

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    // TRAE NUEVAMENTE CADA VEZ QUE ENTRAMOS EN PRODUCT, ENTONCES
    // SI MODIFICAMOS PRODUCTOS NO NOS VA A QUEDAR ORDENADO POR ID.
    this._productService.list().subscribe(
      _data => {
        this.products = _data;
      });

  }

  onSelectedProduct(product: Product): void {
    this.emitter.emit(product);
  }

}

