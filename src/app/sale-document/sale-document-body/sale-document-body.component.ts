import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { SaleItem } from '../../_model/document/sale-item.model';

@Component({
  selector: 'nab-sale-document-body',
  templateUrl: './sale-document-body.component.html',
  styles: []
})
export class SaleDocumentBodyComponent implements OnInit {

  constructor() { }

  items: SaleItem[] = new Array<SaleItem>();

  @Output()
  emitter = new EventEmitter<SaleItem[]>();

  ngOnInit() {
    this.emitter.emit(this.items);
  }

}
