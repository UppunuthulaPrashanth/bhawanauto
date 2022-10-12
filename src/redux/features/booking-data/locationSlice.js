import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HTTP_STATUS, API_URL } from "../../../config/Constants";
import axios from "axios";
import Checkerror from "../../../components/Errors";
import { toast } from "react-toastify";

const namespace = "customer/booking";

export const getLocation = createAsyncThunk(
  `${namespace}/getLocation`,
  async (location_id) => {
    try {
      const { data } = await axios.get(`${API_URL}/${namespace}/getLocation`);
      return data;
    } catch (error) {
      return Checkerror(error);
    }
  }
);

export const getLocationSlice = createSlice({
    name: namespace,
    initialState: {
      loading: "",
      data: [],
    },
    reducers: {},
    extraReducers: {
      [getLocation.pending](state, action) {
        state.loading = HTTP_STATUS.PENDING;
      },
      [getLocation.fulfilled](state, action) {
        state.loading = HTTP_STATUS.FULFILLED;
        state.data = action.payload;
      },
      [getLocation.rejected](state, action) {
        state.loading = HTTP_STATUS.REJECTED;
      },
    },
  });
