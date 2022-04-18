import { AppDataSource } from '../../data-source';
import { isExistValue } from '../../utils/helpers';
import { Product } from './models/Product';
import { Product as ProductEntity } from '../../entities/Product';
import { ApplicationError } from '../../errors/application-error';

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
    const entity = await AppDataSource.getRepository(ProductEntity).findOne({ where: { id } });

    if (!isExistValue(entity)) throw ApplicationError.create('Product not found');

    const product = new Product(entity);

    return product;
  }

  async decreaseQuantity(id: string): Promise<Product> {
    const product = await this.get(id);

    if (product.quantity === 0)
      throw ApplicationError.create('Unable to decrease product quantity, quantity already 0');

    await AppDataSource.getRepository(ProductEntity).update(id, { quantity: product.quantity - 1 });

    return this.get(id);
  }
}

export const productService = ProductService.instance;
