import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    currentPage: 1,
  },
  reducers: {
    changePage: (state, actions) => {
      state.currentPage = actions.payload;
    },
  },
});

export const paginationReducer = paginationSlice.reducer;

export const { changePage } = paginationSlice.actions;
