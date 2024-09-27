import { createSlice } from "@reduxjs/toolkit";
import { data } from "../helper/data";

const slice = createSlice({
  name: "products",
  initialState: {
    data,
    filters: {
      colors: [],
      prices: {
        min: 0,
        max: 0,
      },
    },
  },
  reducers: {
    changeFilters(state, action) {
      state.filters[action.payload.name] = action.payload.value;
    },
  },
});

export const { changeFilters } = slice.actions;

export default slice.reducer;
