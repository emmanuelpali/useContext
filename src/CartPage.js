import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const CartPage = () => {
  const { cartItems, removeItemFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Cart Page</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>${item.price.toFixed(2)}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => removeItemFromCart(item)}>Remove</button>
        </div>
      ))}
      <p>Total: ${totalPrice.toFixed(2)}</p>
      <button onClick={clearCart}>Clear Cart</button>
      <Link to="/">Back to Landing Page</Link>
    </div>
  );
};

export default CartPage;
