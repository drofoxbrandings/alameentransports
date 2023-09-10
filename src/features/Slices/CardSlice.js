import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  card0isExpand: false,
  card1isExpand: false,
  card2isExpand: false,
  card3isExpand: false,
};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    expand: (state, action) => {
      state[action.payload] = true;
    },
    contract: (state, action) => {
      state[action.payload] = false;
    },
  },
});

export const { expand, contract } = cardSlice.actions;

export default cardSlice.reducer;
