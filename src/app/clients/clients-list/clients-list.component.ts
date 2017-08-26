import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Client } from '../../_model/person/client.model';
import { ClientService } from '../_service/client.service';


@Component({
  selector: 'nab-clients-list',
  templateUrl: './clients-list.component.html',
  styles: []
})
export class ClientsListComponent implements OnInit {

  clients: Client[];

  @Output()
  selectedClient: Client;

  @Output()
  emmitter = new EventEmitter<Client>();


  constructor(private _clientService: ClientService) { }

  ngOnInit() {
    this._clientService.list().subscribe(
      _data => {
        {
          this.clients = _data;
        }
      });


  }

  onSelectedClient(client: Client): void {
    this.selectedClient = client;
    this.emmitter.next(this.selectedClient); // next o emit , enviamos a clientes para que despues usemos en sale-document
  }

  // Tambien puedo poner el parametro dd/MM/yyyy directamente en el template html
  get format() { return 'dd/MM/yyyy'; }
}
