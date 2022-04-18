import { ProductResponse } from '../responses/ProductResponse';

export class Product {
  id: string;

  name: string;

  imageUrl: string;

  price: number;

  quantity: number;

  constructor({
    id,
    name,
    imageUrl,
    price,
    quantity
  }: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    quantity: number;
  }) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.price = price;
    this.quantity = quantity;
  }

  get isAvailable(): boolean {
    return this.quantity !== 0;
  }
}
