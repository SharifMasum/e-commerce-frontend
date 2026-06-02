import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import api, { API_BASE_URL } from "../../config/api";

export const createOrder = createAsyncThunk(
  "order/create",
  async ({ address, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/api/orders/", address);
      if (data.id) navigate({ search: `step=3&order_id=${data.id}` });
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message ?? err.message);
    }
  }
);

export const getOrderById = createAsyncThunk(
  "order/getById",
  async (orderId, { rejectWithValue }) => {
    try {
      const { data } = await api.get(`/api/orders/${orderId}`);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message ?? err.message);
    }
  }
);

export const getOrderHistory = createAsyncThunk(
  "order/history",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/api/orders/user");
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message ?? err.message);
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: { orders: [], order: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => { state.loading = true; })
      .addCase(createOrder.fulfilled, (state, { payload }) => { state.loading = false; state.order = payload; })
      .addCase(createOrder.rejected, (state, { payload }) => { state.loading = false; state.error = payload; })

      .addCase(getOrderById.pending, (state) => { state.loading = true; })
      .addCase(getOrderById.fulfilled, (state, { payload }) => { state.loading = false; state.order = payload; })
      .addCase(getOrderById.rejected, (state, { payload }) => { state.loading = false; state.error = payload; })

      .addCase(getOrderHistory.pending, (state) => { state.loading = true; state.orders = []; })
      .addCase(getOrderHistory.fulfilled, (state, { payload }) => { state.loading = false; state.orders = payload; })
      .addCase(getOrderHistory.rejected, (state, { payload }) => { state.loading = false; state.error = payload; state.orders = []; });
  },
});

export default orderSlice.reducer;
