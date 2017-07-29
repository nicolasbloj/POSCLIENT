import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions, Headers, RequestMethod } from '@angular/http';

@Injectable()
export class RestClientService {
  constructor(private _http: Http) { }

  public getData(url: string): Observable<Response> {
    return this._http.get(url);
  }

  public insertOrUpdateData(aObject: any, url_base: string, url_resource: string):
    Observable<Response> {
    const url: string = url_base + url_resource;
    // Los envíos de información deben configurarse a mano
    // esto es fácilmente generalizable y reutilizable
    const body = JSON.stringify(aObject);

    const headers0: Headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers0 });

    // declarar la llamada y retornar el observable
    // las variables de configuración y los datos, van como parámetros

    /*if (aObject.id) {
      return this._http
        .put(`${url}/aObject.id`, body, options); 
    } else {
      return this._http
        .post(`${url}/`, body, options);
    }*/

    //Usamos solo PUT tanto para insertar o actualizar data
    return this._http.put(`${url}/`, body, options); // ?
    
  }
}
