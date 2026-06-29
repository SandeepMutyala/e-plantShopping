import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',

  initialState: {
    items: [],
  },

  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find((plant) => plant.id === action.payload.id);

      if (item) {
        item.quantity++;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    increase: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);

      item.quantity++;
    },

    decrease: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);

      if (item.quantity > 1) {
        item.quantity--;
      }
    },
  },
});

export const { addToCart, removeItem, increase, decrease } = CartSlice.actions;

export default CartSlice.reducer;
