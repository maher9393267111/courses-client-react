import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user";
 import parentcategorytSlice from "./parentcategory";
  import diffSlice from "./diff";

export default configureStore({
  reducer: {
    user: userSlice,
     parentcategory: parentcategorytSlice,
     diff: diffSlice,
   

  },
});