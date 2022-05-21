import { createSlice } from "@reduxjs/toolkit";

export const parentcategorySlice = createSlice({
  name: "parentcategory",
  initialState: {
//userinfo:JSON.parse(localStorage.getItem('user')),
allparentcategories:JSON.parse(localStorage.getItem('parentcat')),
singleparentcategory:{},
currentcreted:{},  // for edit
toggle:false,
open:false,
message:'',
parentcatid:'',
//token:localStorage.getItem('usertoken')

   
  },

  reducers: {
    fetch_all_parentcategory: (state, action) => {
     // state.userinfo = action.payload;
        state.allparentcategories = JSON.parse(localStorage.getItem('parentcat'));
    
    },

parentcat_byid: (state, action) => {
   const id = action.payload;
   console.log(id);
    const singleparentcategory = state.allparentcategories.filter(parentcategory => parentcategory._id === id);
    state.singleparentcategory = singleparentcategory[0];
console.log(singleparentcategory);

},


// reset update parentcategory modal after update success

singlecat_reset: (state, action) => {

  
  state.singleparentcategory = {};
  
  state.toggle = false;
 

  state.parentcatid = '';
  console.log("reset modal went here workkk in Reduxxx",state.singleparentcategory,state.toggle,state.parentcatid);
}



  },




});

// Action creators are generated for each case reducer function
export const {
fetch_all_parentcategory,
parentcat_byid,
singlecat_reset
  


 
} = parentcategorySlice.actions;

export default parentcategorySlice.reducer;


// delet api call
