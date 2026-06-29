import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { increase, decrease, removeItem } from '../redux/CartSlice';

import { Link } from 'react-router-dom';

function CartItem() {
  const cart = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const totalPlants = cart.reduce((sum, item) => sum + item.quantity, 0);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>

      <h2>Total Plants: {totalPlants}</h2>

      <h2>Total Cost: ${total}</h2>

      {cart.map((item) => (
        <div className="card">
          <img src={item.image} />

          <h3>{item.name}</h3>

          <p>Unit Price ${item.price}</p>

          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => dispatch(increase(item.id))}>+</button>

          <span>{item.quantity}</span>

          <button onClick={() => dispatch(decrease(item.id))}>-</button>

          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      ))}

      <Link to="/plants">
        <button>Continue Shopping</button>
      </Link>

      <button>Checkout Coming Soon</button>
    </div>
  );
}

export default CartItem;
