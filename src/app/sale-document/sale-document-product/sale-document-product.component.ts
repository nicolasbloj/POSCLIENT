import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { SaleItem } from '../../_model/document/sale-item.model';
import { Product } from '../../_model/product.model';

@Component({
  selector: 'nab-sale-document-product',
  templateUrl: './sale-document-product.component.html',
  styles: []
})
export class SaleDocumentProductComponent implements OnInit {


  @Input()
  product: Product;

  values: any;

  @Output()
  emitter = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.product = new Product();
    this.values = { price: 0, quantity: 1 };
  }

  // to grid.
  addProduct() {
    // enviar item a sale-document
    this.emitter.emit(this.values);

    // Limpiar item
    this.product = new Product();
    this.values = { price: 0, quantity: 1 };
  }

}
