import { isExistValue } from '../../utils/helpers';

class ProductService {
  static _instance: ProductService | undefined;

  static get instance(): ProductService {
    if (!isExistValue(this._instance)) {
      this._instance = new ProductService();

      return this._instance;
    }

    return this._instance;
  }
}

export const productService = ProductService.instance;
