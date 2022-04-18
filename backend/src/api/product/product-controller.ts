import { NextFunction, Request, Response } from 'express';
import { isExistValue } from '../../utils/helpers';
import { productService } from './product-service';

class ProductController {
  static _instance: ProductController | undefined;

  static get instance(): ProductController {
    if (!isExistValue(this._instance)) {
      this._instance = new ProductController();

      return this._instance;
    }

    return this._instance;
  }
}

export const productController = ProductController.instance;
