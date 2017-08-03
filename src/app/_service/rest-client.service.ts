import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions, Headers, RequestMethod } from '@angular/http';

@Injectable()
export class RestClientService {

  private INSERT_UPDATE = 1;
  private UPDATE = 2;
  private DELETE = 3;


  constructor(private _http: Http) { }

  public listData(url: string): Observable<Response> {
    return this._http.get(url);
  }

  public insertOrUpdateData
    (aObject: any, url_base: string, url_resource: string): Observable<Response> {
    return this.insertOrUpdateOrDelete(aObject, url_base, url_resource, this.INSERT_UPDATE);
  }

  public deleteData
    (aObject: any, url_base: string, url_resource: string): Observable<Response> {
    return this.insertOrUpdateOrDelete(aObject, url_base, url_resource, this.DELETE);
  }

  private insertOrUpdateOrDelete
    (aObject: any, url_base: string, url_resource: string, operation: number): Observable<Response> {

    const url: string = url_base + url_resource;
    const body = JSON.stringify(aObject);
    const headers0: Headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers0 });

    switch (operation) {

      case this.INSERT_UPDATE:
        console.log('INSERT-UPDATE');
        return this._http.put(`${url}/`, body, options); // PUT

      case this.DELETE:
        console.log('DELETE');
        return this._http.delete(`${url}/${aObject.getId}`, options);
    }

  }

}
