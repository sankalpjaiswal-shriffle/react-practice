import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../components/reducers/cartSlice";
import { paginationReducer } from "../components/reducers/paginationSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    pagination: paginationReducer,
  },
});

export default store;
