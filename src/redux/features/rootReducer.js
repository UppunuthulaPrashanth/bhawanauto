import { combineReducers } from "@reduxjs/toolkit";

// login and register slices
import { registerSlice, loginSlice } from "./auth/authSlice";
import { getProfileSlice, updateProfileSlice } from "./profile/profileSlice";
import { getAddonSlice } from "./booking-data/addonSlice";
import { getLocationSlice } from "./booking-data/locationSlice";
import { getMakeSlice } from "./booking-data/makeSlice";
import { getPackageSlice } from "./booking-data/packagesSlice";
import { getStateSlice } from "./booking-data/stateSlice";
import { getTimeslotSlice } from "./booking-data/timeslotSlice";
import { getYearSlice } from "./booking-data/yearSlice";
import { getModalSlice } from "./booking-data/makeModelSlice";

// exporting slice to combined reducers
export default combineReducers({

    register:registerSlice.reducer,
    login:loginSlice.reducer,
    getProfile:getProfileSlice.reducer,
    updateProfile:updateProfileSlice.reducer,

    // booking related reducers
    make:getMakeSlice.reducer,
    modal:getModalSlice.reducer,
    location:getLocationSlice.reducer,
    timeslot:getTimeslotSlice.reducer,
    year:getYearSlice.reducer,
    state:getStateSlice.reducer,
    addon:getAddonSlice.reducer,
    package:getPackageSlice.reducer,

})