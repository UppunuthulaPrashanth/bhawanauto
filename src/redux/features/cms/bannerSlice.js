import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HTTP_STATUS, API_URL } from "../../../config/Constants";
import axios from "axios";
import Checkerror from "../../../components/Errors";

const namespace = "customer/images";

// Get banners
export const getBanners = createAsyncThunk(`${namespace}/Banners`, async () => {
  try {
    const { data } = await axios.get(`${API_URL}/${namespace}/Banners`);
    return data;
  } catch (error) {
    return Checkerror(error);
  }
});

export const getBannerSlice = createSlice({
  name: namespace,
  initialState: {
    loading: "",
    data: [],
  },
  reducers: {},
  extraReducers: {
    [getBanners.pending](state, action) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [getBanners.fulfilled](state, action) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.data = action.payload;
    },
    [getBanners.rejected](state, action) {
      state.loading = HTTP_STATUS.REJECTED;
    },
  },
});

// Get car brands images
export const getCarBrands = createAsyncThunk(`${namespace}/CarBrands`, async () => {
  try {
    const { data } = await axios.get(`${API_URL}/${namespace}/CarBrands`);
    return data;
  } catch (error) {
    return Checkerror(error);
  }
});

export const getCarBrandSlice = createSlice({
  name: namespace,
  initialState: {
    loading: "",
    data: [],
  },
  reducers: {},
  extraReducers: {
    [getCarBrands.pending](state, action) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [getCarBrands.fulfilled](state, action) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.data = action.payload;
    },
    [getCarBrands.rejected](state, action) {
      state.loading = HTTP_STATUS.REJECTED;
    },
  },
});


// OurCarServiceParnters
export const getParnters = createAsyncThunk(`${namespace}/OurCarService`, async () => {
  try {
    const { data } = await axios.get(`${API_URL}/${namespace}/OurCarService`);
    return data;
  } catch (error) {
    return Checkerror(error);
  }
});

export const getPartnerSlice = createSlice({
  name: namespace,
  initialState: {
    loading: "",
    data: [],
  },
  reducers: {},
  extraReducers: {
    [getParnters.pending](state, action) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [getParnters.fulfilled](state, action) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.data = action.payload;
    },
    [getParnters.rejected](state, action) {
      state.loading = HTTP_STATUS.REJECTED;
    },
  },
});


// OurCarServiceParnters
export const getClients= createAsyncThunk(`${namespace}/OurClient`, async () => {
  try {
    const { data } = await axios.get(`${API_URL}/${namespace}/OurClient`);
    return data;
  } catch (error) {
    return Checkerror(error);
  }
});

export const getClientSlice = createSlice({
  name: namespace,
  initialState: {
    loading: "",
    data: [],
  },
  reducers: {},
  extraReducers: {
    [getClients.pending](state, action) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [getClients.fulfilled](state, action) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.data = action.payload;
    },
    [getClients.rejected](state, action) {
      state.loading = HTTP_STATUS.REJECTED;
    },
  },
});



// OurCarServiceParnters
export const getGallery= createAsyncThunk(`${namespace}/Gallery`, async () => {
  try {
    const { data } = await axios.get(`${API_URL}/${namespace}/Gallery`);
    return data;
  } catch (error) {
    return Checkerror(error);
  }
});

export const getGallerySlice = createSlice({
  name: namespace,
  initialState: {
    loading: "",
    data: [],
  },
  reducers: {},
  extraReducers: {
    [getClients.pending](state, action) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [getClients.fulfilled](state, action) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.data = action.payload;
    },
    [getClients.rejected](state, action) {
      state.loading = HTTP_STATUS.REJECTED;
    },
  },
});