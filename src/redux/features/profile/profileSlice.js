import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HTTP_STATUS, API_URL } from "../../../config/Constants";
import axios from "axios";
import Checkerror from "../../../components/Errors";
import { toast } from "react-toastify";

const namespace = "customer";

export const getProfile = createAsyncThunk(
  `${namespace}/getProfile`,
  async () => {
    try {
      const userToken = JSON.parse(localStorage.getItem("userToken"));
      const { data } = await axios.get(`${API_URL}/${namespace}/getProfile`,{
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

export const getProfileSlice = createSlice({
    name: namespace,
    initialState: {
      loading: "",
      data: [],
    },
    reducers: {},
    extraReducers: {
      [getProfile.pending](state, action) {
        state.loading = HTTP_STATUS.PENDING;
      },
      [getProfile.fulfilled](state, action) {
        state.loading = HTTP_STATUS.FULFILLED;
        state.data = action.payload
      },
      [getProfile.rejected](state, action) {
        state.loading = HTTP_STATUS.REJECTED;
      },
    },
  });




  // update profile

  export const updateProfile = createAsyncThunk(
    `${namespace}/updateProfile`,
    async (formData) => {
      console.log(formData)
      try {
        const userToken = JSON.parse(localStorage.getItem("userToken"));
        const { data } = await axios.post(`${API_URL}/${namespace}/updateProfile`, formData,{
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        toast.success(data.message)
        return data;
      } catch (error) {
        return Checkerror(error);
      }
    }
  );
  
  export const updateProfileSlice = createSlice({
      name: namespace,
      initialState: {
        loading: "",
        data: [],
      },
      reducers: {},
      extraReducers: {
        [updateProfile.pending](state, action) {
          state.loading = HTTP_STATUS.PENDING;
        },
        [updateProfile.fulfilled](state, action) {
          state.loading = HTTP_STATUS.PENDING;
          },
        [updateProfile.rejected](state, action) {
          state.loading = HTTP_STATUS.REJECTED;
        },
      },
    });
    
  


  
    
  