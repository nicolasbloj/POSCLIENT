import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions } from '@angular/http';

import { RestClientService } from '../../_service/rest-client.service';
import { Product } from '../../_model/product.model';
import { product_api, server, product_resource } from '../../../environments/entrypoints-environment';
import { TSMap } from "typescript-map";

@Injectable()
export class ProductService {

  data: Observable<Product[]>;

  constructor(private _restClientService: RestClientService) { }

  add(product: Product): Observable<TSMap<string, number>> {
    return this._restClientService.insertOrUpdateData(
      product,
      server.pos_endpoint,
      product_resource.add
      //).map( (res: Response) => res.text() );
    ).map((res: Response) => <TSMap<string, number>>new TSMap().fromJSON(res.json()));
  }

  list(): Observable<Product[]> {
    return this._restClientService.getData(product_api.list)
      .map((res: Response) => res.json()); // !!
  }
  // otra forma de hacerlo es devolviendo Observale<Response>
  // (y nos evitamos map())
  // y en product-list hacer la conversion a Product[], asi : 
  /*
  list(): Observable<Response> {
    return this._restClientService.getData(this.url);
  }
  // y en ProductListComponent:
   ngOnInit() {
    this._productService.list().subscribe(
       res => this.products = res.json());
  }
  */

}
