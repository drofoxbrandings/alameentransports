import { configureStore } from "@reduxjs/toolkit";
import homepageReducer from "../features/Slices/HomepageSlice";
import cardReducer from "../features/Slices/CardSlice";
import buttonReducer from "../features/Slices/ButtonSlice";

export const store = configureStore({
  reducer: {
    homepage: homepageReducer,
    cards: cardReducer,
    buttonAction: buttonReducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      serializableCheck: false,
    }),
});
