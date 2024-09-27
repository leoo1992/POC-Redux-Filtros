import { createSlice } from "@reduxjs/toolkit";
import { data } from "../helper/data";

const slice = createSlice({
  name: "products",
  initialState: {
    data,
  },
  reducers: {},
});

// export const fetchPhotos = slice.asyncAction;

export default slice.reducer;
