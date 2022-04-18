import { NextFunction, Request, Response } from 'express';
import { isExistValue } from '../../utils/helpers';
import { productService } from '../../services/product/product-service';

class ProductController {
  static _instance: ProductController | undefined;

  static get instance(): ProductController {
    if (!isExistValue(this._instance)) {
      this._instance = new ProductController();

      return this._instance;
    }

    return this._instance;
  }

  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await productService.list();

      return res.json({ products });
    } catch (error) {
      return next(error);
    }
  }

  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const product = await productService.get(id);

      return res.json({ product });
    } catch (error) {
      return next(error);
    }
  }

  async purchase(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const product = await productService.decreaseQuantity(id);

      return res.json({ product });
    } catch (error) {
      return next(error);
    }
  }
}

export const productController = ProductController.instance;
