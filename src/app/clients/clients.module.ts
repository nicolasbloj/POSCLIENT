import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestClientService } from '../_service/rest-client.service';
import { ClientService } from './_service/client.service';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientsDetailComponent } from './clients-detail/clients-detail.component';
import { ClientsFilterComponent } from './clients-filter/clients-filter.component';
import { PhonePipe } from './_pipe/phone.pipe';

@NgModule({
  imports: [
    CommonModule,
    ClientsRoutingModule,
    HttpModule
  ],
  declarations: [
    ClientsComponent,
    ClientsListComponent,
    ClientsDetailComponent,
    ClientsFilterComponent,
    PhonePipe
  ],
  providers: [ClientService, RestClientService],
  exports: [
    ClientsComponent,
    ClientsListComponent,
    ClientsDetailComponent,
    ClientsFilterComponent
    ]
})
export class ClientsModule { }
