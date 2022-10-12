import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HTTP_STATUS, API_URL } from "../../../config/Constants";
import axios from "axios";
import Checkerror from "../../../components/Errors";
import { toast } from "react-toastify";

const namespace = "customer/booking";

export const getTimeslot = createAsyncThunk(
  `${namespace}/getTimeslot`,
  async (location_id) => {
    try {
      const { data } = await axios.get(`${API_URL}/${namespace}/getTimeslot/`+location_id);
      return data;
    } catch (error) {
      return Checkerror(error);
    }
  }
);

export const getTimeslotSlice = createSlice({
    name: namespace,
    initialState: {
      loading: "",
      data: [],
    },
    reducers: {},
    extraReducers: {
      [getTimeslot.pending](state, action) {
        state.loading = HTTP_STATUS.PENDING;
      },
      [getTimeslot.fulfilled](state, action) {
        state.loading = HTTP_STATUS.FULFILLED;
        state.data = action.payload;
      },
      [getTimeslot.rejected](state, action) {
        state.loading = HTTP_STATUS.REJECTED;
      },
    },
  });
