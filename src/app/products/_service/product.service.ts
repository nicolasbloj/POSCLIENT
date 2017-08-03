import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions } from '@angular/http';
import { TSMap } from 'typescript-map';

import { RestClientService } from '../../_service/rest-client.service';
import { Product } from '../../_model/product.model';
import { product_api, server, product_resource } from '../../../environments/entrypoints-environment';
import { ProductHelper } from '../_helper/product.helper';

@Injectable()
export class ProductService {

  constructor(private _restClientService: RestClientService) { }

  list(): Observable<Product[]> {
    return this._restClientService.listData(product_api.list)
      .map((res: Response) => ProductHelper.convertJsonToProductsArray(res.json()));
    // USAR FOR EACH
  }

  insert(product: Product): Observable<TSMap<string, number>> {
    return this.insertOrUpdate(product);
  }

  update(product: Product): Observable<TSMap<string, number>> {
    return this.insertOrUpdate(product);
  }

  insertOrUpdate(product: Product): Observable<TSMap<string, number>> {
    return this._restClientService.insertOrUpdateData(
      product,
      server.pos_endpoint,
      product_resource.addOrUpdate
      // ).map( (res: Response) => res.text() );
    ).map((res: Response) => <TSMap<string, number>>new TSMap().fromJSON(res.json()));
  }


  delete(product: Product): Observable<TSMap<string, number>> {
    return this._restClientService.deleteData(
      product,
      server.pos_endpoint,
      product_resource.delete
      // ).map( (res: Response) => res.text() );
    ).map((res: Response) => <TSMap<string, number>>new TSMap().fromJSON(res.json()));
  }


  // en list()
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
