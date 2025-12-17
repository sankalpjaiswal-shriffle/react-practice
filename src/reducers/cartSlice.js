import { createSlice } from "@reduxjs/toolkit";
const cart = JSON.parse(localStorage.getItem("cart"));

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: cart?.length > 0 ? cart : [],
  },

  reducers: {
    addItemToCart: (state, action) => {
      const cartItem = state.cart.find((item) => item.id === action.payload.id);

      if (cartItem) {
        cartItem.quantity++;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
        });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    increment: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decrement: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removeItem;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const { addItemToCart, removeItem, increment, decrement } =
  cartSlice.actions;
