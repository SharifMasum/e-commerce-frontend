import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../config/api";

export const createReview = createAsyncThunk(
  "review/create",
  async (reqData, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/api/reviews/create", reqData);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getAllReviews = createAsyncThunk(
  "review/getAll",
  async (productId, { rejectWithValue }) => {
    try {
      const { data } = await api.get(`/api/reviews/product/${productId}`);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const createRating = createAsyncThunk(
  "review/createRating",
  async (reqData, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/api/ratings/create", reqData);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getAllRatings = createAsyncThunk(
  "review/getAllRatings",
  async (productId, { rejectWithValue }) => {
    try {
      const { data } = await api.get(`/api/ratings/product/${productId}`);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const reviewSlice = createSlice({
  name: "review",
  initialState: { reviews: [], ratings: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createReview.fulfilled, (state, { payload }) => { state.reviews = [...state.reviews, payload]; })
      .addCase(createReview.rejected, (state, { payload }) => { state.error = payload; })

      .addCase(getAllReviews.fulfilled, (state, { payload }) => { state.reviews = payload; })
      .addCase(getAllReviews.rejected, (state, { payload }) => { state.error = payload; })

      .addCase(createRating.fulfilled, (state, { payload }) => { state.ratings = [...state.ratings, payload]; })
      .addCase(createRating.rejected, (state, { payload }) => { state.error = payload; })

      .addCase(getAllRatings.fulfilled, (state, { payload }) => { state.ratings = payload; })
      .addCase(getAllRatings.rejected, (state, { payload }) => { state.error = payload; });
  },
});

export default reviewSlice.reducer;
