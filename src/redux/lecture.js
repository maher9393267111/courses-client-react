import { createSlice } from "@reduxjs/toolkit";

export const lectureSlice = createSlice({
  name: "lecture",
  initialState: {
//userinfo:JSON.parse(localStorage.getItem('user')),
allectures:JSON.parse(localStorage.getItem('lectures')),
singlelecture:{},
currentcreted:{},  // for edit
toggle:false,
open:false,
message:'',
courseid:'',
updateExecute:false,

   
  },

  reducers: {
    fetch_lectures: (state, action) => {
  
        state.allectures = JSON.parse(localStorage.getItem('lectures'));
    
    },

lecture_byid: (state, action) => {
   const id = action.payload;
   console.log(id);
    const singlelecturefilter = state.allectures.filter(course => course._id === id);
    state.singlelecture = singlelecturefilter[0];
console.log(singlelecturefilter);

},


// reset update parentcategory modal after update success

singlelecture_reset: (state, action) => {

  
  state.singlelecture = {};
  
  state.toggle = false;
 


  console.log("reset modal went here workkk in Reduxxx",state.singleparentcategory,state.toggle);
},

update_execute: (state, action) => {
  state.updateExecute = action.payload.exec;
  const id = action.payload.id;
  console.log(action.payload);
  console.log(id);
   const singlelecturefilter = state.allectures.filter(course => course._id === id);
   state.singlelecture = singlelecturefilter[0];
console.log(singlelecturefilter);
},



  },




});

// Action creators are generated for each case reducer function
export const {
    
    fetch_lectures,
    lecture_byid,
    singlelecture_reset,
    update_execute
  


 
} = lectureSlice.actions;

export default lectureSlice.reducer;


// delet api call
