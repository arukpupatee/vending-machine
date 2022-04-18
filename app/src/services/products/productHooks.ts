import { range } from 'ramda';
import { useEffect, useState } from 'react';
import { Product } from './models/Product';

export const useListProducts = (): { products: Product[] } => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const products = range(1, 14)
      .map((n) => ({
        id: `${n}`,
        name: `Product${n}`,
        imageUrl: 'https://place-hold.it/500x500',
        price: n * 10,
        quantity: n === 5 ? 0 : 10,
        isAvailable: n === 5 ? false : true
      }))
      .map((data) => new Product(data));

    setProducts(products);
  }, []);

  return { products };
};

export const useGetProduct = (id: string): { product?: Product } => {
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const product = new Product({
      id,
      name: `Product${id}`,
      imageUrl: 'https://place-hold.it/500x500',
      price: 100,
      quantity: 10
    });

    setProduct(product);
  }, [id]);

  return { product };
};
