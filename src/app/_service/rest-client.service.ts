import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

@Injectable()
export class RestClientService {
  constructor(private _http: Http) { }

  //General
  public getData(url: string): Observable<Response> {
    return this._http.get(url);
  }

}
