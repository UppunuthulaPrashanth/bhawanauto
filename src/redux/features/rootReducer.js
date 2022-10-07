import { combineReducers } from "@reduxjs/toolkit";

// login and register slices
import { registerSlice, loginSlice } from "./auth/authSlice";




// exporting slice to combined reducers
export default combineReducers({

    register:registerSlice.reducer,
    login:loginSlice.reducer
    
})