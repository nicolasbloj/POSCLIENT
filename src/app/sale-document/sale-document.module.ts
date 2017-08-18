import { FormsModule } from '@angular/forms';
import { ProductsModule } from '../products/products.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SaleDocumentComponent } from './sale-document.component';
import { ClientsModule } from '../clients/clients.module';
import { SaleDocumentRoutingModule } from './sale-document-routing.module';
import { SaleDocumentClientComponent } from './sale-document-client/sale-document-client.component';
import { SaleDocumentProductComponent } from './sale-document-product/sale-document-product.component';
import { SaleDocumentBodyComponent } from './sale-document-body/sale-document-body.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SaleDocumentRoutingModule,
    ClientsModule,
    ProductsModule
  ],
  declarations: [
    SaleDocumentComponent,
    SaleDocumentClientComponent,
    SaleDocumentProductComponent,
    SaleDocumentBodyComponent
  ]
})
export class SaleDocumentModule { }
