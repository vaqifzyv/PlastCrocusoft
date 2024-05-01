import { configureStore } from "@reduxjs/toolkit";
import { prApi } from "../redux/index";

export const store = configureStore({
  reducer: {
    [prApi.reducerPath]: prApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(prApi.middleware),
});
