import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HTTP_STATUS, API_URL } from "../../../config/Constants";
import axios from "axios";
import Checkerror from "../../../components/Errors";

const namespace = "customer";

export const submitContact = createAsyncThunk(
  `${namespace}/contact`,
  async (formData) => {
    try {
      const userToken = JSON.parse(localStorage.getItem("userToken"));
      const { data } = await axios.post(`${API_URL}/${namespace}/contact`,formData,{
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

export const submitContactSlice = createSlice({
    name: namespace,
    initialState: {
      loading: "",
      data: [],
    },
    reducers: {},
    extraReducers: {
      [submitContact.pending](state, action) {
        state.loading = HTTP_STATUS.PENDING;
      },
      [submitContact.fulfilled](state, action) {
        state.loading = HTTP_STATUS.FULFILLED;
        state.data = action.payload
      },
      [submitContact.rejected](state, action) {
        state.loading = HTTP_STATUS.REJECTED;
      },
    },
  });



  

    
  