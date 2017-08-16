import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions } from '@angular/http';

import { JsonConverter } from '../../_util/json-converter';
import { Client } from '../../_model/person/client.model';
import { client_api } from '../../../environments/entrypoints-environment';
import { RestClientService } from '../../_service/rest-client.service';


@Injectable()
export class ClientService {

  constructor(private _restClientService: RestClientService) { }

  list(): Observable<Client[]> {
    return this._restClientService.listData(client_api.list)
      .map((res: Response) => new JsonConverter(new Client())
      .convertJsonToObjectsArray(res.json()));
  }
}
