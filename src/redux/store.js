import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user";
 import parentcategorytSlice from "./parentcategory";
  import diffSlice from "./diff";
  import subcategorySlice from "./sub-cat";
  import  courseSlice from "./course";
import lectureSlice from "./lecture";
export default configureStore({
  reducer: {
    user: userSlice,
     parentcategory: parentcategorytSlice,
     diff: diffSlice,
     subcategory: subcategorySlice,
      course: courseSlice,
      lecture: lectureSlice,
   

  },
});