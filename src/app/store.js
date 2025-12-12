import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../components/reducers/cartSlice";

const store = configureStore({
  reducer: cartReducer,
});

export default store;
