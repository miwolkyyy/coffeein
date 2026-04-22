// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../feature/searchSlice";
export const store = configureStore({
  reducer: {
    search: searchReducer,
    // data: dataReducer, // contoh data lain
  },
});
