import { JsonConverter } from './json-converter';
import { SerializationHelper } from '../serialization.helper';
import { Product } from '../../../_model/product.model';

export class ProductJsonConverter implements JsonConverter<Product> {


  private static instance: ProductJsonConverter = null;

  constructor() { }

  public static getInstance(): ProductJsonConverter {
    if (this.instance === null) {
      this.instance = new ProductJsonConverter();
    }
    return this.instance;
  }

  convertJsonToObjectsArray(_data: any[]): Product[] {
    const products: Product[] = new Array();
    for (let j = 0; j < _data.length; j = j + 1) {
      products.push(
        SerializationHelper.toInstance(new Product(),
          JSON.stringify(_data[j]))
      );

    }
    return products;
  }
}