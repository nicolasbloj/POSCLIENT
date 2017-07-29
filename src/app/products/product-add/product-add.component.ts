import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TSMap } from "typescript-map";

import { Product } from '../../_model/product.model';
import { ProductService } from '../_service/product.service';

@Component({
  selector: 'nab-product-add',
  templateUrl: './product-add.component.html',
  styles: []
})
export class ProductAddComponent implements OnInit {

  resp: TSMap<string, number>;
  message: string = '';
  id: number;

  product: Product = new Product('', '');

  @Output()
  emitter = new EventEmitter<Product>();

  constructor(private _productService: ProductService) { }

  ngOnInit() {

  }

  addProduct(): void {
    console.log("Add Product");
    console.log(this.product);

    this._productService.addOrUpdate(this.product).subscribe(
      (data) => {
        //el controller en backend devulve map<mensaje,id>
        this.resp = data;

        let m: any[] =  this.resp.map(function (value, key) {
          return key;
        });;


        let i: any[] =  this.resp.map(function (value, key) {
          return value;
        });;

        this.message = m[0];
        this.id = i[0];

        this.product.setId = this.id;

        this.emitter.emit(this.product);

        this.product = new Product('', '');
        //this.product = {code:'',description:''};
      
      },
      error => this.message = 'Error al cargar producto'
    );
  }
}
