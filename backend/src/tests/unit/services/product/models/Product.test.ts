import { Product } from '../../../../../services/product/models/Product';

describe('Product model', () => {
  it('should available when quantity more than 0', () => {
    const product = new Product({ id: '', name: '', imageUrl: '', price: 0, quantity: 10 });

    expect(product.isAvailable).toBe(true);
  });

  it('should not available when quantity is 0', () => {
    const product = new Product({ id: '', name: '', imageUrl: '', price: 0, quantity: 0 });

    expect(product.isAvailable).toBe(false);
  });
});
