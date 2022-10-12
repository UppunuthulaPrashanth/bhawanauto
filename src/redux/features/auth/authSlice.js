import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HTTP_STATUS, API_URL } from "../../../config/Constants";
import axios from "axios";
import Checkerror from "../../../components/Errors";
import { toast } from "react-toastify";

const namespace = "customer/auth";

export const register = createAsyncThunk(
  `${namespace}/register`,
  async (formData) => {
    try {
      const { data } = await axios.post(
        `${API_URL}/${namespace}/register`,
        formData
      );
      toast.success(data.message);
      return data;
    } catch (error) {
      return Checkerror(error);
    }
  }
);

export const login = createAsyncThunk(
  `${namespace}/login`,
  async (formData) => {
    try {
      const { data } = await axios.post(
        `${API_URL}/${namespace}/login`,
        formData
      );
      if (data.token) {
        localStorage.setItem("userToken", JSON.stringify(data.token));
        toast.success(data.message);
      }
      return data;
    } catch (error) {
      return Checkerror(error);
    }
  }
);

export const registerSlice = createSlice({
  name: namespace,
  initialState: {
    loading: "",
    data: [],
  },
  reducers: {},
  extraReducers: {
    [register.pending](state, action) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [register.fulfilled](state, action) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.data = action.payload;
    },
    [register.rejected](state, action) {
      state.loading = HTTP_STATUS.REJECTED;
    },
  },
});

export const loginSlice = createSlice({
  name: namespace,
  initialState: {
    loading: "",
    data: [],
  },
  reducers: {},
  extraReducers: {
    [login.pending](state, action) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [login.fulfilled](state, action) {
      state.loading = HTTP_STATUS.PENDING;
           state.data = action.payload;

    },
    [login.rejected](state, action) {
      state.loading = HTTP_STATUS.REJECTED;
    },
  },
});
