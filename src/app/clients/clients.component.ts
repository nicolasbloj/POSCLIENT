import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Client } from '../_model/person/client.model';

@Component({
  selector: 'nab-clients',
  templateUrl: './clients.component.html',
  styles: []
})
export class ClientsComponent implements OnInit {

  @Output()
  emmitter = new EventEmitter<Client>(); // document-sale. document-sale llama a este componente y no al revez.

  constructor() { }

  ngOnInit() {
  }

  receiveClient(client: Client): void {
    this.emmitter.next(client); // pasamos parametro , aqui hacemos un puente para que le llegue a sale-document
  }


}
