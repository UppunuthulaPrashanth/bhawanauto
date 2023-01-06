import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HTTP_STATUS, API_URL } from "../../../config/Constants";
import axios from "axios";
import Checkerror from "../../../components/Errors";

const namespace = "customer";

// Get banners
export const getOffersData= createAsyncThunk(`${namespace}/getOffers`, async () => {
  try {
    const { data } = await axios.get(`${API_URL}/${namespace}/getOffers`);
    return data;
  } catch (error) {
    return Checkerror(error);
  }
});

export const getOffersDataSlice = createSlice({
  name: namespace,
  initialState: {
    loading: "",
    data: [],
  },
  reducers: {},
  extraReducers: {
    [getOffersData.pending](state, action) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [getOffersData.fulfilled](state, action) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.data = action.payload;
    },
    [getOffersData.rejected](state, action) {
      state.loading = HTTP_STATUS.REJECTED;
    },
  },
});