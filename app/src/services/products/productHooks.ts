import { useEffect, useState } from 'react';
import { Product } from './models/Product';
import { productAPI } from './ProductAPI';

export const useListProducts = (): { products: Product[] } => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    productAPI
      .list()
      .then((productResponses) =>
        productResponses.map((productResponse) => new Product(productResponse))
      )
      .then((products) => setProducts(products));
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
