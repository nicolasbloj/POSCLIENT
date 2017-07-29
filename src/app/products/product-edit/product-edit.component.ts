import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { TSMap } from "typescript-map";

import { Product } from '../../_model/product.model';
import { ProductService } from '../_service/product.service';

@Component({
  selector: 'nab-product-edit',
  templateUrl: './product-edit.component.html',
  styles: []
})
export class ProductEditComponent implements OnInit {
  @Output()
  emitter = new EventEmitter<Product>();

  resp: TSMap<string, number>;

  message: string = '';

  @Input()
  product: Product; // error {code,desc}

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.product = new Product('', ''); // error {code,desc}
  }

  //actualizamos producto y emitimos al componente padre para q actualice en array tambien.
  updateProduct(): void {
    this._productService.addOrUpdate(this.product).subscribe(
      (data) => {
        //el controller en backend devuelve map<mensaje,id>
        this.resp = data;

        let m: any[] = this.resp.map(function (value, key) {
          return key;
        });;

        this.emitter.emit(this.product);

        this.product = new Product('', '');
      },
      error => this.message = 'Error al actualizar producto'
    );

  }

}
