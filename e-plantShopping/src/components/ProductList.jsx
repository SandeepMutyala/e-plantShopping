import React from 'react';

import plants from '../data/plants';

import { useDispatch } from 'react-redux';

import { addToCart } from '../redux/CartSlice';

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Plants Collection</h1>

      <div className="products">
        {plants.map((plant) => (
          <div className="card" key={plant.id}>
            <img src={plant.image} />

            <h3>{plant.name}</h3>

            <p>
              Category:
              {plant.category}
            </p>

            <p>${plant.price}</p>

            <button onClick={() => dispatch(addToCart(plant))}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
