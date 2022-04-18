import axios, { AxiosInstance } from 'axios';
import { isExistValue } from '../../utils/helpers';
import { ProductResponse } from './responses/ProductResponse';

class ProductAPI {
  static _instance: ProductAPI | undefined;

  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  static get instance(): ProductAPI {
    if (!isExistValue(this._instance)) {
      const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_BACKEND_API_URL });
      this._instance = new ProductAPI(axiosInstance);

      return this._instance;
    }

    return this._instance;
  }

  async list(): Promise<ProductResponse[]> {
    const result = await this.axiosInstance.get<{ products: ProductResponse[] }>('/products');

    return result.data.products;
  }
}

export const productAPI = ProductAPI.instance;
