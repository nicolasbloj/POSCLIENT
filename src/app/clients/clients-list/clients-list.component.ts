import { Client } from '../../_model/person/client.model';
import { ClientService } from '../_service/client.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
  hiddenEmit = new EventEmitter<Client>();


  constructor(private _clientService: ClientService) { }

  ngOnInit() {
    this._clientService.list().subscribe(
      _data => {
        {
          this.clients = _data;
          console.log(this.clients);
        }
      });


  }

  onSelectedClient(client: Client): void {
    this.selectedClient = client;
    // this.hiddenEmit.next(this.selectedClient); //next o emit , enviamos a clientes para que despues usemos en sale-document
  }
}
