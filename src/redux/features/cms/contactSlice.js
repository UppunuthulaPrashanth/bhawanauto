import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HTTP_STATUS, API_URL } from "../../../config/Constants";
import axios from "axios";
import Checkerror from "../../../components/Errors";

const namespace = "customer";

// Get banners
export const getAddressesData= createAsyncThunk(`${namespace}/getAddresses`, async () => {
  try {
    const { data } = await axios.get(`${API_URL}/${namespace}/getAddresses`);
    return data;
  } catch (error) {
    return Checkerror(error);
  }
});

export const getAddressesDataSlice = createSlice({
  name: namespace,
  initialState: {
    loading: "",
    data: [],
  },
  reducers: {},
  extraReducers: {
    [getAddressesData.pending](state, action) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [getAddressesData.fulfilled](state, action) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.data = action.payload;
    },
    [getAddressesData.rejected](state, action) {
      state.loading = HTTP_STATUS.REJECTED;
    },
  },
});