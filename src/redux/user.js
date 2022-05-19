import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
userinfo:{},
toggle:false,
open:false,
message:'',
token:''

   
  },

  reducers: {
    fetch_userinfo: (state, action) => {
      state.userinfo = action.payload;
    },
},


});

// Action creators are generated for each case reducer function
export const {
fetch_userinfo,
  


 
} = userSlice.actions;

export default userSlice.reducer;
