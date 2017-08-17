import { Component, Input, OnInit } from '@angular/core';

import { Client } from '../../_model/person/client.model';


@Component({
  selector: 'nab-sale-document-client',
  templateUrl: './sale-document-client.component.html',
  styles: ['.borderless td, .borderless th {border: none;}'
  ]
})
export class SaleDocumentClientComponent implements OnInit {


  @Input()
  client: Client;

  constructor() { }

  ngOnInit() {
    this.client = new Client();
  }

}

