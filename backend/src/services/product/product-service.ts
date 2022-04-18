import { AppDataSource } from '../../data-source';
import { isExistValue } from '../../utils/helpers';
import { Product } from './models/Product';
import { Product as ProductEntity } from '../../entities/Product';

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
    const entities = await AppDataSource.getRepository(ProductEntity).find();
    const products = entities.map((entity) => new Product(entity));

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
