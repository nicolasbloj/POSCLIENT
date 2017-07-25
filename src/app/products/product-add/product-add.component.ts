import { Component, OnInit } from '@angular/core';

import { Product } from '../../_model/product.model';
import { ProductService } from '../_service/product.service';

@Component({
  selector: 'nab-product-add',
  templateUrl: './product-add.component.html',
  styles: []
})
export class ProductAddComponent implements OnInit {

  message: string;

  product: Product = new Product('', '');

  constructor(private _productService: ProductService) { }

  ngOnInit() {

  }

  add(): void {
    this._productService.add(this.product).subscribe(
      (data) => {
        this.message = data;
        this.product = new Product('', '');
        //relist!
      },
      error => this.message = 'Error al cargar producto'
    );
    
    
  }
}
