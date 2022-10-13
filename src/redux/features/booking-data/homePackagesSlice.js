import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HTTP_STATUS, API_URL } from "../../../config/Constants";
import axios from "axios";
import Checkerror from "../../../components/Errors";

const namespace = "customer/booking";

export const getHomePackage = createAsyncThunk(
  `${namespace}/getGroupPackages`,
  async () => {
    try {
      const { data } = await axios.get(`${API_URL}/${namespace}/getGroupPackages`);
      return data;
    } catch (error) {
      return Checkerror(error);
    }
  }
);

export const getHomePackageSlice = createSlice({
    name: namespace,
    initialState: {
      loading: "",
      data: [],
    },
    reducers: {},
    extraReducers: {
      [getHomePackage.pending](state, action) {
        state.loading = HTTP_STATUS.PENDING;
      },
      [getHomePackage.fulfilled](state, action) {
        state.loading = HTTP_STATUS.FULFILLED;
        state.data = action.payload;
      },
      [getHomePackage.rejected](state, action) {
        state.loading = HTTP_STATUS.REJECTED;
      },
    },
  });
