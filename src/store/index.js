import { configureStore } from "@reduxjs/toolkit";
import snackbarReducer from "./slices/snackbar.slice";

const store = configureStore({
  reducer: {
    snackbar: snackbarReducer,
  },
});

export default store;
