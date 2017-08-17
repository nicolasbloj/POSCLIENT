import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SaleDocumentComponent } from './sale-document.component';
import { ClientsModule } from '../clients/clients.module';
import { SaleDocumentRoutingModule } from './sale-document-routing.module';
import { SaleDocumentClientComponent } from './sale-document-client/sale-document-client.component';

@NgModule({
  imports: [
    CommonModule,
    SaleDocumentRoutingModule,
    ClientsModule
  ],
  declarations: [
    SaleDocumentComponent,
    SaleDocumentClientComponent
  ]
})
export class SaleDocumentModule { }
