import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../config/api";

// Stripe-based payment: backend returns { payment_link_url } for Stripe Checkout redirect
export const createPayment = createAsyncThunk(
  "payment/create",
  async (orderId, { rejectWithValue }) => {
    try {
      const { data } = await api.post(`/api/payments/${orderId}`);
      if (data.payment_link_url) window.location.href = data.payment_link_url;
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message ?? err.message);
    }
  }
);

export const updatePayment = createAsyncThunk(
  "payment/update",
  async ({ paymentId, orderId }, { rejectWithValue }) => {
    try {
      const { data } = await api.get(
        `/api/payments?payment_id=${paymentId}&order_id=${orderId}`
      );
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message ?? err.message);
    }
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState: { payment: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPayment.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(createPayment.fulfilled, (state, { payload }) => { state.loading = false; state.payment = payload; })
      .addCase(createPayment.rejected, (state, { payload }) => { state.loading = false; state.error = payload; })

      .addCase(updatePayment.pending, (state) => { state.loading = true; })
      .addCase(updatePayment.fulfilled, (state, { payload }) => { state.loading = false; state.payment = payload; })
      .addCase(updatePayment.rejected, (state, { payload }) => { state.loading = false; state.error = payload; });
  },
});

export default paymentSlice.reducer;
