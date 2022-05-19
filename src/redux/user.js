import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
userinfo:JSON.parse(localStorage.getItem('user')),

toggle:false,
open:false,
message:'',
token:localStorage.getItem('usertoken')

   
  },

  reducers: {
    fetch_userinfo: (state, action) => {
     // state.userinfo = action.payload;
        state.userinfo = JSON.parse(localStorage.getItem('user'));
      state.token = localStorage.getItem('usertoken');
    },
},


});

// Action creators are generated for each case reducer function
export const {
fetch_userinfo,
  


 
} = userSlice.actions;

export default userSlice.reducer;
