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
      const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_BACKEND_API_URL || 'http://localhost:3000/api'
      });
      this._instance = new ProductAPI(axiosInstance);

      return this._instance;
    }

    return this._instance;
  }

  async list(): Promise<ProductResponse[]> {
    const result = await this.axiosInstance.get<{ products: ProductResponse[] }>('/products');

    return result.data.products;
  }

  async get(id: string): Promise<ProductResponse> {
    const result = await this.axiosInstance.get<{ product: ProductResponse }>(`/products/${id}`);

    return result.data.product;
  }

  async purchase(id: string): Promise<ProductResponse> {
    const result = await this.axiosInstance.post<{ product: ProductResponse }>(
      `/products/${id}/purchase`
    );

    return result.data.product;
  }
}

export const productAPI = ProductAPI.instance;
