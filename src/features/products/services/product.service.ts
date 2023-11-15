import { Product } from '../types';

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch('http://localhost:3001/products', {
    cache: 'no-cache',
  });
  return await response.json();
};
