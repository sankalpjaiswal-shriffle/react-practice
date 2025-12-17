import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../reducers/cartSlice";
import { paginationReducer } from "../reducers/paginationSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    pagination: paginationReducer,
  },
});

export default store;
