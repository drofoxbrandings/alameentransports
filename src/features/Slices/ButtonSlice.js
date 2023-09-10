import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playId: "",
};

const buttonSlice = createSlice({
  name: "buttonAction",
  initialState,
  reducers: {
    playVideo: (state, action) => {
      state.playId = action.payload;
    },
    closeVideo: (state) => {
      state.playId = initialState.playId;
    },
  },
});

export const { playVideo, closeVideo } = buttonSlice.actions;

export default buttonSlice.reducer;
