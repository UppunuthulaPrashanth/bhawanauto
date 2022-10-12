import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HTTP_STATUS, API_URL } from "../../../config/Constants";
import axios from "axios";
import Checkerror from "../../../components/Errors";
import { toast } from "react-toastify";

const namespace = "customer/booking";

export const getState = createAsyncThunk(
  `${namespace}/getState`,
  async () => {
    try {
      const { data } = await axios.get(`${API_URL}/${namespace}/getState`);
      return data;
    } catch (error) {
      return Checkerror(error);
    }
  }
);

export const getStateSlice = createSlice({
    name: namespace,
    initialState: {
      loading: "",
      data: [],
    },
    reducers: {},
    extraReducers: {
      [getState.pending](state, action) {
        state.loading = HTTP_STATUS.PENDING;
      },
      [getState.fulfilled](state, action) {
        state.loading = HTTP_STATUS.FULFILLED;
        state.data = action.payload;
      },
      [getState.rejected](state, action) {
        state.loading = HTTP_STATUS.REJECTED;
      },
    },
  });
