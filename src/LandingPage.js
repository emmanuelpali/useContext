import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Product 1', price: 10.99 },
  { id: 2, name: 'Product 2', price: 19.99 },
  { id: 3, name: 'Product 3', price: 7.99 },
  { id: 4, name: 'Product 4', price: 24.99 },
  { id: 5, name: 'Product 5', price: 14.99 },
  { id: 6, name: 'Product 6', price: 12.99 },
];

const LandingPage = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      <Link to="/cart">View Cart</Link>
    </div>
  );
};

export default LandingPage;
