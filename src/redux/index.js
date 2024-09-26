import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import cartSlice from "./slices/cart-slice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,

    [api.reducerPath]: api.reducer, // caching
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
