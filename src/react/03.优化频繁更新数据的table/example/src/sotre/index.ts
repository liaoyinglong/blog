import { configureStore } from "@reduxjs/toolkit";
import { listSlice } from "./listSlice";

const rootReducer = {
  [listSlice.name]: listSlice.reducer
};

export const rootStore = configureStore({
  reducer: rootReducer,
  devTools: true
});
