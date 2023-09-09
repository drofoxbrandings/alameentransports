import { configureStore } from "@reduxjs/toolkit";
import homepageReducer from "../features/Slices/HomepageSlice";
import cardReducer from "../features/Slices/CardSlice";

export const store = configureStore({
  reducer: {
    homepage: homepageReducer,
    cards: cardReducer
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      serializableCheck: false,
    }),
});
