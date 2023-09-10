import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showForm: false,
};

const homePageSlice = createSlice({
  name: "homepage",
  initialState,
  reducers: {
    openForm: (state) => {
      state.showForm = true;
    },
  },
});

export const { openForm } = homePageSlice.actions;

export default homePageSlice.reducer;
