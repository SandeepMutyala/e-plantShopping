import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',

  initialState: {
    items: [],
  },

  reducers: {
    addItem: (state, action) => {
      const existing = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existing) {
        existing.quantity++;
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

    updateQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload.id);

      if (item) {
        item.quantity = action.payload.quantity;
      }
    },

    increase: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);

      if (item) {
        item.quantity++;
      }
    },

    decrease: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);

      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
  },
});

export const {
  addItem,

  removeItem,

  updateQuantity,

  increase,

  decrease,
} = CartSlice.actions;

export default CartSlice.reducer;
