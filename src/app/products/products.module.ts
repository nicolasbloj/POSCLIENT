import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { RestClientService } from '../_service/rest-client.service';
import { ProductService } from './_service/product.service';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    ProductsListComponent, 
    ProductsComponent, 
    ProductAddComponent,
    ProductEditComponent
  ],
  providers: [ProductService, RestClientService]
})
export class ProductsModule { }
