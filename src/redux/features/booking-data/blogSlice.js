import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HTTP_STATUS, API_URL } from "../../../config/Constants";
import axios from "axios";
import Checkerror from "../../../components/Errors";

const namespace = "customer";

export const getBlog = createAsyncThunk(
  `${namespace}/getBlogs`,
  async () => {
    try {
      const { data } = await axios.get(`${API_URL}/${namespace}/getBlogs`);
      return data;
    } catch (error) {
      return Checkerror(error);
    }
  }
);

export const getBlogSlice = createSlice({
    name: namespace,
    initialState: {
      loading: "",
      data: [],
    },
    reducers: {},
    extraReducers: {
      [getBlog.pending](state, action) {
        state.loading = HTTP_STATUS.PENDING;
      },
      [getBlog.fulfilled](state, action) {
        state.loading = HTTP_STATUS.FULFILLED;
        state.data = action.payload;
      },
      [getBlog.rejected](state, action) {
        state.loading = HTTP_STATUS.REJECTED;
      },
    },
  });
