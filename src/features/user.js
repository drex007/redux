import { createSlice } from "@reduxjs/toolkit";



export const userSlice = createSlice({
    name: "user", //name of state
    initialState: {value : {name: "", age:0, email:""}}, //Initialvalue of state
    reducers: {
     login: (state, action) => {
        state.value = action.payload;
     }, //Function to alter initialvalue of state 
    },
});


export const {login} = userSlice.actions; // exporting userSlice actions 

export default userSlice.reducer; 