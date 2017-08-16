import { Component, Input, OnInit } from '@angular/core'; 

import { Client } from '../../_model/person/client.model';

@Component({
  selector: 'nab-clients-detail',
  templateUrl: './clients-detail.component.html',
  styles: []
})
export class ClientsDetailComponent implements OnInit {

  @Input()
  client: Client;

  constructor() { }

  ngOnInit() {
  }

}
