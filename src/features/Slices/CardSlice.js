import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isExpand: false,
};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    expand: (state) => {
      state.isExpand = true;
    },
    contract: (state) => {
      state.isExpand = false;
    },
  },
});

export const { expand, contract } = cardSlice.actions;

export default cardSlice.reducer;
