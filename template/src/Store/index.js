import { configureStore } from "@reduxjs/toolkit";
import UiReducer from "./reducers/UiReducer";

export const store = configureStore({
  reducer: {
    ui: UiReducer,
  },
});
