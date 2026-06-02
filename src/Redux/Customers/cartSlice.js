import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../config/api";

export const getCart = createAsyncThunk(
  "cart/get",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/api/cart/");
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message ?? err.message);
    }
  }
);

export const addItemToCart = createAsyncThunk(
  "cart/addItem",
  async (reqData, { rejectWithValue }) => {
    try {
      const { data } = await api.put("/api/cart/add", reqData);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message ?? err.message);
    }
  }
);

export const removeCartItem = createAsyncThunk(
  "cart/removeItem",
  async (cartItemId, { rejectWithValue }) => {
    try {
      await api.delete(`/api/cart_items/${cartItemId}`);
      return cartItemId;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message ?? err.message);
    }
  }
);

export const updateCartItem = createAsyncThunk(
  "cart/updateItem",
  async ({ cartItemId, data: body }, { rejectWithValue }) => {
    try {
      const { data } = await api.put(`/api/cart_items/${cartItemId}`, body);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message ?? err.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: null, cartItems: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCart.pending, (state) => { state.loading = true; })
      .addCase(getCart.fulfilled, (state, { payload }) => { state.loading = false; state.cart = payload; state.cartItems = payload.cartItems; })
      .addCase(getCart.rejected, (state, { payload }) => { state.loading = false; state.error = payload; })

      .addCase(addItemToCart.pending, (state) => { state.loading = true; })
      .addCase(addItemToCart.fulfilled, (state, { payload }) => { state.loading = false; state.cartItems = [...state.cartItems, payload.cartItems]; })
      .addCase(addItemToCart.rejected, (state, { payload }) => { state.loading = false; state.error = payload; })

      .addCase(removeCartItem.pending, (state) => { state.loading = true; })
      .addCase(removeCartItem.fulfilled, (state, { payload }) => { state.loading = false; state.cartItems = state.cartItems.filter((i) => i.id !== payload); })
      .addCase(removeCartItem.rejected, (state, { payload }) => { state.loading = false; state.error = payload; })

      .addCase(updateCartItem.pending, (state) => { state.loading = true; })
      .addCase(updateCartItem.fulfilled, (state, { payload }) => { state.loading = false; state.cartItems = state.cartItems.map((i) => (i.id === payload.id ? payload : i)); })
      .addCase(updateCartItem.rejected, (state, { payload }) => { state.loading = false; state.error = payload; });
  },
});

export default cartSlice.reducer;
