import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HTTP_STATUS, API_URL } from "../../../config/Constants";
import axios from "axios";
import Checkerror from "../../../components/Errors";
import { toast } from "react-toastify";

const namespace = "customer/booking";

export const getModal = createAsyncThunk(
  `${namespace}/getModal`,
  async (make_id) => {
    try {
      const { data } = await axios.get(`${API_URL}/${namespace}/getModal/`+make_id);
      return data;
    } catch (error) {
      return Checkerror(error);
    }
  }
);

export const getModalSlice = createSlice({
    name: namespace,
    initialState: {
      loading: "",
      data: [],
    },
    reducers: {},
    extraReducers: {
      [getModal.pending](state, action) {
        state.loading = HTTP_STATUS.PENDING;
      },
      [getModal.fulfilled](state, action) {
        state.loading = HTTP_STATUS.FULFILLED;
        state.data = action.payload;
      },
      [getModal.rejected](state, action) {
        state.loading = HTTP_STATUS.REJECTED;
      },
    },
  });
