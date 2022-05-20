import { createSlice } from "@reduxjs/toolkit";

export const parentcategorySlice = createSlice({
  name: "parentcategory",
  initialState: {
//userinfo:JSON.parse(localStorage.getItem('user')),
allparentcategories:JSON.parse(localStorage.getItem('parentcat')),
singleparentcategory:[],
currentcreted:{},  // for edit
toggle:false,
open:false,
message:'',
//token:localStorage.getItem('usertoken')

   
  },

  reducers: {
    fetch_all_parentcategory: (state, action) => {
     // state.userinfo = action.payload;
        state.allparentcategories = JSON.parse(localStorage.getItem('parentcat'));
    
    },
},



});

// Action creators are generated for each case reducer function
export const {
fetch_all_parentcategory,
  


 
} = parentcategorySlice.actions;

export default parentcategorySlice.reducer;
