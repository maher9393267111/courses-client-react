import { createSlice } from "@reduxjs/toolkit";

export const diffSlice = createSlice({
  name: "difference",
  initialState: {

togglemodal:false,
open:false,
message:'',
change:false,
obj:{},
arr:[],


   
  },

  reducers: {
    open_modal: (state, action) => {
 
        state.togglemodal = true;
    
    },

    close_modal: (state, action) => {
      
            state.togglemodal = false;
        
        },

        toggle_modal: (state, action) => {
             
                state.togglemodal = !state.togglemodal;
            
            }
},



});

// Action creators are generated for each case reducer function
export const {

    open_modal,
    close_modal,
    toggle_modal,


 
} = diffSlice.actions;

export default diffSlice.reducer;
