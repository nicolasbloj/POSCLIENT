import 'rxjs/add/operator/map';
// ...core testing imports
import { async, getTestBed, TestBed } from '@angular/core/testing';
// ...http imports
import { BaseRequestOptions, Http, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { Product } from '../_model/product.model';
import { product_api } from '../../environments/entrypoints-environment';
import { ProductJsonConverter } from '../_util/json/converter/product-json-converter';
import { RestClientService } from './rest-client.service';

describe('Service: RestClientService', () => {
    let mockBackend: MockBackend;
    let service: RestClientService;

    beforeEach(async(() => {    // async ?
        TestBed.configureTestingModule({
            providers: [
                BaseRequestOptions,
                MockBackend,
                RestClientService,
                {
                    deps: [
                        MockBackend,
                        BaseRequestOptions
                    ],
                    provide: Http, // XHRBackend  ?
                    useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    }
                }
            ]
        });

        const testbed = getTestBed();
        mockBackend = testbed.get(MockBackend);
        service = testbed.get(RestClientService);

    }));

    // tslint:disable-next-line:no-shadowed-variable
    function setupConnections(backend: MockBackend, options: any) {
        backend.connections.subscribe((connection: MockConnection) => {
            if (connection.request.url === product_api.list) {
                // Aqui deberiamos trabajar sobre Observable ?
                const responseOptions = new ResponseOptions(options);
                const response = new Response(responseOptions);

                connection.mockRespond(response);
            }
        });
    }


    it('should return the list of products', () => {
        setupConnections(mockBackend,
            {
                body:
                [
                    new Product('a', 'b', 1) // sino no me tomaba como objeto product
                    /*{
                        id: 1,
                        code: 'a',
                        description: 'b'
                    }*/
                ]
                ,
                status: 200
            });


        service.listData(product_api.list)
            .map(
            (res: Response) =>
            ProductJsonConverter.getInstance().convertJsonToObjectsArray(res.json()) // .data
            )
            .subscribe((data: Product[]) => {
                console.log(data);
                expect(data).not.toBeNull();
                expect(data[0].getCode).toEqual('a');

            });


            // Al trabajarlo asi no tengo un array de products, sino un array object.
            /*service.listData(product_api.list)
            .subscribe(
            (res: Response) => {
                const data: Product[] = res.json();
                    console.log('DATA->' + data[0].getCode);
            });*/

        // response :
        // Response{_body: [Product{code: ..., description: ..., id: ...}], status: 200, ok: true, statusText: null, headers: n
        // ull, type: null, url: null}

    });

});
