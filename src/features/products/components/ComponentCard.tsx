import React from 'react';
import { Product } from '../types';

type Props = {
  product: Product;
};
const ProductCard: React.FC<Props> = ({ product }) => {
  return <div>{product.name}</div>;
};

export default ProductCard;
