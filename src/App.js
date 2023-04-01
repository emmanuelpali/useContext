import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './CartContext';
import LandingPage from './LandingPage';
import ProductDetailPage from './ProductDetailPage';
import CartPage from './CartPage';

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
            
      
          <Route path="/product/:id" element={<ProductDetailPage />}/>

          <Route path="/cart" element={<CartPage />} />
            

        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
