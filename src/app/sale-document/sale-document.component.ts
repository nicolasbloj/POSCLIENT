import { Component, OnInit } from '@angular/core';

import { Client } from '../_model/person/client.model';

@Component({
  selector: 'nab-sale-document',
  templateUrl: './sale-document.component.html',
  styles: []
})
export class SaleDocumentComponent implements OnInit {

  selectedClientOnPopup: Client;

  constructor() { }

  ngOnInit() {
  }

  receiveClient(client: Client): void {
    this.selectedClientOnPopup = client;
  }
}

