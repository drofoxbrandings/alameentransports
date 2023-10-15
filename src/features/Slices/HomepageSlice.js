import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showForm: false,
  companyVal: "",
};

const homePageSlice = createSlice({
  name: "homepage",
  initialState,
  reducers: {
    openForm: (state, action) => {
      state.showForm = true;
      state.companyVal = action.payload;
    },
    closeForm: (state) => {
      state.showForm = false;
      state.companyVal = "";
    },
  },
});

export const { openForm, closeForm } = homePageSlice.actions;

export default homePageSlice.reducer;
