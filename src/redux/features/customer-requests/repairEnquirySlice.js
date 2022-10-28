import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HTTP_STATUS, API_URL } from "../../../config/Constants";
import axios from "axios";
import Checkerror from "../../../components/Errors";

const namespace = "customer";

export const submitRepairEnquiry = createAsyncThunk(
  `${namespace}/enquiry`,
  async (formData) => {
    try {
      const { data } = await axios.post(`${API_URL}/${namespace}/enquiry_form`,formData,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return data;
    } catch (error) {
      return Checkerror(error);
    }
  }
);

export const submitRepairEnquirySlice = createSlice({
    name: namespace,
    initialState: {
      loading: "",
      data: [],
    },
    reducers: {},
    extraReducers: {
      [submitRepairEnquiry.pending](state, action) {
        state.loading = HTTP_STATUS.PENDING;
      },
      [submitRepairEnquiry.fulfilled](state, action) {
        state.loading = HTTP_STATUS.FULFILLED;
        state.data = action.payload
      },
      [submitRepairEnquiry.rejected](state, action) {
        state.loading = HTTP_STATUS.REJECTED;
      },
    },
  });



  

    
  