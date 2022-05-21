import { createSlice } from "@reduxjs/toolkit";

export const subcategorySlice = createSlice({
  name: "subcategory",
  initialState: {
//userinfo:JSON.parse(localStorage.getItem('user')),
subcategories:   JSON.parse(localStorage.getItem('subcat')) ? JSON.parse(localStorage.getItem('subcat')) : [],
singlesubcategory:{},
currentcreted:{},  // for edit
togglesub:false,
opensub:false,
message:'',
subcatid:'',
//token:localStorage.getItem('usertoken')

   
  },

  reducers: {
    fetch_all_subcategory: (state, action) => {
     // state.userinfo = action.payload;
        state.subcategories = JSON.parse(localStorage.getItem('subcat'));
    
    },

subcat_byid: (state, action) => {
   const id = action.payload;
   console.log(id);
    const singlesubcategory = state.subcategories.filter(subcategory => subcategory._id === id);
    state.singlesubcategory = singlesubcategory[0];
console.log(singlesubcategory);

},


// reset update parentcategory modal after update success

singlesub_cat_reset: (state, action) => {

  
  state.singlesubcategory = {};
  
  state.togglesub = false;
 

  state.subcatid = '';
  //console.log("reset modal went here workkk in Reduxxx",state.singleparentcategory,state.toggle,state.parentcatid);
}



  },




});

// Action creators are generated for each case reducer function
export const {
    fetch_all_subcategory,
subcat_byid,
singlesubcat_reset
  


 
} = subcategorySlice.actions;

export default subcategorySlice.reducer;



