import React from 'react';

import { Routes, Route, Link } from 'react-router-dom';

import ProductList from './components/ProductList';

import Navbar from './components/Navbar';

import CartItem from './components/CartItem';

import AboutUs from './components/AboutUs';

import './App.css';

import { useSelector } from 'react-redux';

function App() {
  const cart = useSelector((state) => state.cart.items);

  const count = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Navbar>
        <Link to="/">Home</Link>

        <Link to="/plants">Plants</Link>

        <Link to="/cart">🛒 {count}</Link>
      </Navbar>

      <Routes>
        <Route path="/" element={<AboutUs />} />

        <Route path="/plants" element={<ProductList />} />

        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </>
  );
}

export default App;
