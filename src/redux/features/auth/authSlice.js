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



// Login

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



  // reset password request of otp
  export const forgetPassword = createAsyncThunk(
    `${namespace}/forget-password`,
    async (formData) => {
      try {
        const { data } = await axios.post(`${API_URL}/${namespace}/forget-password`, formData);
        toast.success(data.message)
        return data;
      } catch (error) {
        return Checkerror(error);
      }
    }
  );
  
  export const forgetPasswordSlice = createSlice({
      name: namespace,
      initialState: {
        loading: "",
        data: [],
      },
      reducers: {},
      extraReducers: {
        [forgetPassword.pending](state, action) {
          state.loading = HTTP_STATUS.PENDING;
        },
        [forgetPassword.fulfilled](state, action) {
          state.loading = HTTP_STATUS.PENDING;
          },
        [forgetPassword.rejected](state, action) {
          state.loading = HTTP_STATUS.REJECTED;
        },
      },
    });
    
  

    // reset password with verification of otp 
  export const resetPassword = createAsyncThunk(
    `${namespace}/reset-password`,
    async (formData) => {
      try {
        const { data } = await axios.post(`${API_URL}/${namespace}/reset-password`, formData);
        toast.success(data.message)
        return data;
      } catch (error) {
        return Checkerror(error);
      }
    }
  );
  
  export const resetPasswordSlice = createSlice({
      name: namespace,
      initialState: {
        loading: "",
        data: [],
      },
      reducers: {},
      extraReducers: {
        [resetPassword.pending](state, action) {
          state.loading = HTTP_STATUS.PENDING;
        },
        [resetPassword.fulfilled](state, action) {
          state.loading = HTTP_STATUS.PENDING;
          },
        [resetPassword.rejected](state, action) {
          state.loading = HTTP_STATUS.REJECTED;
        },
      },
    });