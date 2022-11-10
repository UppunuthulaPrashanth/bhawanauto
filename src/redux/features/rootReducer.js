import { combineReducers } from "@reduxjs/toolkit";

// login and register slices
import { registerSlice, loginSlice, checkAuthSlice } from "./auth/authSlice";
import { getProfileSlice, updateProfileSlice } from "./profile/profileSlice";
import { getAddonSlice } from "./booking-data/addonSlice";
import { getLocationSlice } from "./booking-data/locationSlice";
import { getMakeSlice } from "./booking-data/makeSlice";
import { getPackageSlice } from "./booking-data/packagesSlice";
import { getStateSlice } from "./booking-data/stateSlice";
import { getTimeslotSlice } from "./booking-data/timeslotSlice";
import { getYearSlice } from "./booking-data/yearSlice";
import { getModalSlice } from "./booking-data/makeModelSlice";
import { getHomePackageSlice } from "./booking-data/homePackagesSlice";
import { submitContactSlice } from "./customer-requests/contactusSlice";
import { submitEnquirySlice } from "./customer-requests/enquirySlice";
import { resetPasswordSlice, forgetPasswordSlice } from "./auth/authSlice";
import { submitRepairEnquirySlice } from "./customer-requests/repairEnquirySlice";
import { getBlogSlice } from "./booking-data/blogSlice";
import { getBookingSlice, getSingleBookingSlice, postBookingSlice } from "./booking-data/bookingSlice";

// exporting slice to combined reducers
export default combineReducers({

    register:registerSlice.reducer,
    login:loginSlice.reducer,
    forgetPassword:forgetPasswordSlice.reducer,
    checkAuth:checkAuthSlice.reducer,
    resetPassword:resetPasswordSlice.reducer,
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
    homePackage:getHomePackageSlice.reducer,
    getBlog:getBlogSlice.reducer,
    // contact and enquiry requests
    submitContact:submitContactSlice.reducer,
    submitEnquiry:submitEnquirySlice.reducer,
    submitRepairEnquiry:submitRepairEnquirySlice.reducer,

    // booking slice
    booking:postBookingSlice.reducer,
    getBookings:getBookingSlice.reducer,
    getSinglebookingDetails:getSingleBookingSlice.reducer



})