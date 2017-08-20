import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Totals } from '../../_model/document/totals.model';
import { SaleItem } from '../../_model/document/sale-item.model';

@Component({
  selector: 'nab-sale-document-body',
  templateUrl: './sale-document-body.component.html',
  styles: []
})
export class SaleDocumentBodyComponent implements OnInit {

  constructor() { }

  items: SaleItem[] = new Array<SaleItem>();

  totals: Totals = new Totals(); // inicializado en clase totals.

  @Output()
  emitter = new EventEmitter<SaleItem[]>();

  @Output()
  emitter2 = new EventEmitter<any>();

  ngOnInit() {
    this.emitter.emit(this.items);

    this.emitter2.emit(this.totals);
  }

}
