import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HTTP_STATUS, API_URL } from "../../../config/Constants";
import axios from "axios";
import Checkerror from "../../../components/Errors";

const namespace = "customer/booking";

export const postBooking = createAsyncThunk(
    `${namespace}/makeOrder`,
    async (formData) => {
      try {
        const userToken = JSON.parse(localStorage.getItem("userToken"));
        const { data } = await axios.post(`${API_URL}/${namespace}/makeOrder`,formData,{
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        return data;
      } catch (error) {
        return Checkerror(error);
      }
    }
  );

export const postBookingSlice = createSlice({
    name: namespace,
    initialState: {
      loading: "",
      data: [],
    },
    reducers: {},
    extraReducers: {
      [postBooking.pending](state, action) {
        state.loading = HTTP_STATUS.PENDING;
      },
      [postBooking.fulfilled](state, action) {
        state.loading = HTTP_STATUS.FULFILLED;
        state.data = action.payload;
      },
      [postBooking.rejected](state, action) {
        state.loading = HTTP_STATUS.REJECTED;
      },
    },
  });



  // get bookings list
  export const getBooking = createAsyncThunk(
    `${namespace}/getOrders`,
    async () => {
      try {
        const userToken = JSON.parse(localStorage.getItem("userToken"));
        const { data } = await axios.get(`${API_URL}/${namespace}/getOrders`,{
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        return data;
      } catch (error) {
        return Checkerror(error);
      }
    }
  );

export const getBookingSlice = createSlice({
    name: namespace,
    initialState: {
      loading: "",
      data: [],
    },
    reducers: {},
    extraReducers: {
      [getBooking.pending](state, action) {
        state.loading = HTTP_STATUS.PENDING;
      },
      [getBooking.fulfilled](state, action) {
        state.loading = HTTP_STATUS.FULFILLED;
        state.data = action.payload;
      },
      [getBooking.rejected](state, action) {
        state.loading = HTTP_STATUS.REJECTED;
      },
    },
  });


  // end booking list end


  // get single booking details
    export const getSingleBooking = createAsyncThunk(
      `${namespace}/getSingleOrder`,
      async (id) => {
        try {
          const userToken = JSON.parse(localStorage.getItem("userToken"));
          const { data } = await axios.get(`${API_URL}/${namespace}/getSingleOrder/${id}`,{
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          });
          return data;
        } catch (error) {
          return Checkerror(error);
        }
      }
    );
  
  export const getSingleBookingSlice = createSlice({
      name: namespace,
      initialState: {
        loading: "",
        data: [],
      },
      reducers: {},
      extraReducers: {
        [getSingleBooking.pending](state, action) {
          state.loading = HTTP_STATUS.PENDING;
        },
        [getSingleBooking.fulfilled](state, action) {
          state.loading = HTTP_STATUS.FULFILLED;
          state.data = action.payload;
        },
        [getSingleBooking.rejected](state, action) {
          state.loading = HTTP_STATUS.REJECTED;
        },
      },
    });
    // end single booking details
