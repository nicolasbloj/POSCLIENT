import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";

import { RestClientService } from "../_service/rest-client.service";
import { ProductService } from "./_service/product.service";
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from "./products-routing.module";
import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpModule
  ],
  declarations: [ProductsListComponent, ProductsComponent],
  providers: [ProductService, RestClientService]
})
export class ProductsModule { }
