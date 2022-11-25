import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HTTP_STATUS, API_URL } from "../../../config/Constants";
import axios from "axios";
import Checkerror from "../../../components/Errors";

const namespace = "customer";

// Get banners
export const getStaticData= createAsyncThunk(`${namespace}/getStaticData`, async () => {
  try {
    const { data } = await axios.get(`${API_URL}/${namespace}/getStaticData`);
    return data;
  } catch (error) {
    return Checkerror(error);
  }
});

export const getStaticDataSlice = createSlice({
  name: namespace,
  initialState: {
    loading: "",
    data: [],
  },
  reducers: {},
  extraReducers: {
    [getStaticData.pending](state, action) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [getStaticData.fulfilled](state, action) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.data = action.payload;
    },
    [getStaticData.rejected](state, action) {
      state.loading = HTTP_STATUS.REJECTED;
    },
  },
});