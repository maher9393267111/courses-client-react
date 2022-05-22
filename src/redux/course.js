import { createSlice } from "@reduxjs/toolkit";

export const courseSlice = createSlice({
  name: "course",
  initialState: {
//userinfo:JSON.parse(localStorage.getItem('user')),
allcourses:JSON.parse(localStorage.getItem('courses')),
singlecourse:{},
currentcreted:{},  // for edit
toggle:false,
open:false,
message:'',
courseid:'',
namecourse:'maher'
//token:localStorage.getItem('usertoken')

   
  },

  reducers: {
    fetch_courses: (state, action) => {
  
        state.allcourses = JSON.parse(localStorage.getItem('courses'));
    
    },

course_byid: (state, action) => {
   const id = action.payload;
   console.log(id);
    const singlecoursefilter = state.allcourses.filter(course => course._id === id);
    state.singlecourse = singlecoursefilter[0];
console.log(singlecoursefilter);

},


// reset update parentcategory modal after update success

singlecourse_reset: (state, action) => {

  
  state.singlecourse = {};
  
  state.toggle = false;
 


  console.log("reset modal went here workkk in Reduxxx",state.singleparentcategory,state.toggle);
}



  },




});

// Action creators are generated for each case reducer function
export const {
    
    course_byid,
singlecourse_reset,
fetch_courses
  


 
} = courseSlice.actions;

export default courseSlice.reducer;


// delet api call
