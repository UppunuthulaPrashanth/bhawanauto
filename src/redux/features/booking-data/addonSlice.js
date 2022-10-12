import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HTTP_STATUS, API_URL } from "../../../config/Constants";
import axios from "axios";
import Checkerror from "../../../components/Errors";
import { toast } from "react-toastify";

const namespace = "customer/booking";

export const getAddon = createAsyncThunk(
  `${namespace}/getAddons`,
  async () => {
    try {
      const { data } = await axios.get(`${API_URL}/${namespace}/getAddons`);
      return data;
    } catch (error) {
      return Checkerror(error);
    }
  }
);

export const getAddonSlice = createSlice({
    name: namespace,
    initialState: {
      loading: "",
      data: [],
    },
    reducers: {},
    extraReducers: {
      [getAddon.pending](state, action) {
        state.loading = HTTP_STATUS.PENDING;
      },
      [getAddon.fulfilled](state, action) {
        state.loading = HTTP_STATUS.FULFILLED;
        state.data = action.payload;
      },
      [getAddon.rejected](state, action) {
        state.loading = HTTP_STATUS.REJECTED;
      },
    },
  });
