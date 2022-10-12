import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HTTP_STATUS, API_URL } from "../../../config/Constants";
import axios from "axios";
import Checkerror from "../../../components/Errors";
import { toast } from "react-toastify";

const namespace = "customer/booking";

export const getPackage = createAsyncThunk(
  `${namespace}/getPackages`,
  async () => {
    try {
      const { data } = await axios.get(`${API_URL}/${namespace}/getPackages`);
      return data;
    } catch (error) {
      return Checkerror(error);
    }
  }
);

export const getPackageSlice = createSlice({
    name: namespace,
    initialState: {
      loading: "",
      data: [],
    },
    reducers: {},
    extraReducers: {
      [getPackage.pending](state, action) {
        state.loading = HTTP_STATUS.PENDING;
      },
      [getPackage.fulfilled](state, action) {
        state.loading = HTTP_STATUS.FULFILLED;
        state.data = action.payload;
      },
      [getPackage.rejected](state, action) {
        state.loading = HTTP_STATUS.REJECTED;
      },
    },
  });
