import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user";
// import productSlice from "./product";
// import cartSlice from "./cart";

export default configureStore({
  reducer: {
    user: userSlice,
    // product: productSlice,
    // cart: cartSlice,
   

  },
});