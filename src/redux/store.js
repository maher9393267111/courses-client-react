import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user";
 import parentcategorytSlice from "./parentcategory";
// import cartSlice from "./cart";

export default configureStore({
  reducer: {
    user: userSlice,
     parentcategory: parentcategorytSlice,
    // cart: cartSlice,
   

  },
});