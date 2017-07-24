import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';

import { Http, Response } from '@angular/http';


import { RestClientService } from '../../_service/rest-client.service';
import { Product } from "../../_model/product.model";
import { apirest } from "../../../environments/rest-environment";

@Injectable()
export class ProductService {

  data: Observable<Product[]>;

  constructor(private _restClientService: RestClientService) { }

  url: string = apirest.product_list;

  list(): Observable<Product[]> {
    return this._restClientService.getData(this.url)
      .map((res: Response) => res.json());

  }

}