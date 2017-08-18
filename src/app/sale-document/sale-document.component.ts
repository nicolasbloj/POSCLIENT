import { SaleItem } from '../_model/document/sale-item.model';
import { Product } from '../_model/product.model';
import { Component, OnInit } from '@angular/core';

import { Client } from '../_model/person/client.model';

@Component({
  selector: 'nab-sale-document',
  templateUrl: './sale-document.component.html',
  styles: []
})
export class SaleDocumentComponent implements OnInit {

  selectedClientOnPopup: Client;
  selectedProductOnPopup: Product;

  // item recibido para usar en grilla de venta 
  item: SaleItem;

  items: SaleItem[];

  constructor() { }

  ngOnInit() {
  }

  receiveClient(client: Client): void {
    this.selectedClientOnPopup = client;
  }
  // from doc-product-list in product module.
  receiveProduct(product: Product): void {
    this.selectedProductOnPopup = product;

    console.log('receive product ' + this.selectedProductOnPopup);
    console.log(this.selectedProductOnPopup);
  }
  receiveFocus(): void {
    this.selectedProductOnPopup = null;
  }
  // from sale-document-product
  receiveItem(values: any): void {

    this.item = { product: this.selectedProductOnPopup, price: values.price, quantity: values.quantity };

    console.log(this.items);

    this.items.push(this.item);

    this.selectedProductOnPopup = new Product();

  }

  receiveItemArray(items: SaleItem[]): void {
    this.items = items;
  }


}

