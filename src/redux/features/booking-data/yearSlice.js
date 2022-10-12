import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HTTP_STATUS, API_URL } from "../../../config/Constants";
import axios from "axios";
import Checkerror from "../../../components/Errors";
import { toast } from "react-toastify";

const namespace = "customer/booking";

export const getYear = createAsyncThunk(
  `${namespace}/getYear`,
  async () => {
    try {
      const { data } = await axios.get(`${API_URL}/${namespace}/getYear`);
      return data;
    } catch (error) {
      return Checkerror(error);
    }
  }
);

export const getYearSlice = createSlice({
    name: namespace,
    initialState: {
      loading: "",
      data: [],
    },
    reducers: {},
    extraReducers: {
      [getYear.pending](state, action) {
        state.loading = HTTP_STATUS.PENDING;
      },
      [getYear.fulfilled](state, action) {
        state.loading = HTTP_STATUS.FULFILLED;
        state.data = action.payload;
      },
      [getYear.rejected](state, action) {
        state.loading = HTTP_STATUS.REJECTED;
      },
    },
  });
