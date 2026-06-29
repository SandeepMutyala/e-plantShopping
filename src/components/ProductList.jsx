import React, { useState } from 'react';

import plants from '../data/plants';

import { useDispatch } from 'react-redux';

import { addItem } from '../redux/CartSlice';

function ProductList() {
  const dispatch = useDispatch();

  const [addedPlants, setAddedPlants] = useState([]);

  const categories = [
    'Medicinal Plants',
    'Aromatic Plants',
    'Flowering Plants',
  ];

  const handleAdd = (plant) => {
    dispatch(addItem(plant));

    setAddedPlants([...addedPlants, plant.id]);
  };

  return (
    <div>
      <h1>Plants Collection</h1>

      {categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>

          <div className="products">
            {plants

              .filter((plant) => plant.category === category)

              .map((plant) => (
                <div className="card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />

                  <h3>{plant.name}</h3>

                  <p>${plant.price}</p>

                  <button
                    disabled={addedPlants.includes(plant.id)}
                    onClick={() => handleAdd(plant)}
                  >
                    {addedPlants.includes(plant.id) ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
