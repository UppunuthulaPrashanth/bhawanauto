import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HTTP_STATUS, API_URL } from "../../../config/Constants";
import axios from "axios";
import Checkerror from "../../../components/Errors";
import { toast } from "react-toastify";

const namespace = "customer/booking";

export const getMake = createAsyncThunk(
  `${namespace}/getMake`,
  async () => {
    try {
      const { data } = await axios.get(`${API_URL}/${namespace}/getMake`);
      return data;
    } catch (error) {
      return Checkerror(error);
    }
  }
);

export const getMakeSlice = createSlice({
    name: namespace,
    initialState: {
      loading: "",
      data: [],
    },
    reducers: {},
    extraReducers: {
      [getMake.pending](state, action) {
        state.loading = HTTP_STATUS.PENDING;
      },
      [getMake.fulfilled](state, action) {
        state.loading = HTTP_STATUS.FULFILLED;
        state.data = action.payload;
      },
      [getMake.rejected](state, action) {
        state.loading = HTTP_STATUS.REJECTED;
      },
    },
  });
