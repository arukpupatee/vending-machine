import { range } from 'ramda';
import { isExistValue } from '../../utils/helpers';
import { Product } from './models/Product';

class ProductService {
  static _instance: ProductService | undefined;

  static get instance(): ProductService {
    if (!isExistValue(this._instance)) {
      this._instance = new ProductService();

      return this._instance;
    }

    return this._instance;
  }

  async list(): Promise<Product[]> {
    const products = range(1, 14)
      .map((n) => ({
        id: `${n}`,
        name: `Product${n}`,
        imageUrl: 'https://place-hold.it/500x500',
        price: n * 10,
        quantity: n === 5 ? 0 : 10,
        isAvailable: n === 5 ? false : true,
      }))
      .map((data) => new Product(data));

    return products;
  }

  async get(id: string): Promise<Product> {
    const product = new Product({
      id,
      name: `Product${id}`,
      imageUrl: 'https://place-hold.it/500x500',
      price: 100,
      quantity: 10,
    });

    return product;
  }
}

export const productService = ProductService.instance;
