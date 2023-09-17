import { configureStore } from '@reduxjs/toolkit';
import product from "./slices/product";

export default configureStore({
  reducer: { product },
})