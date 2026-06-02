import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../config/api";

export const findProducts = createAsyncThunk(
  "product/findByCategory",
  async (reqData, { rejectWithValue }) => {
    const { colors, sizes, minPrice, maxPrice, minDiscount, category, stock, sort, pageNumber, pageSize } = reqData;
    try {
      const { data } = await api.get(
        `/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`
      );
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message ?? err.message);
    }
  }
);

export const findProductById = createAsyncThunk(
  "product/findById",
  async (productId, { rejectWithValue }) => {
    try {
      const { data } = await api.get(`/api/products/id/${productId}`);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message ?? err.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: { products: [], product: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(findProducts.pending, (state) => { state.loading = true; state.error = null; state.products = []; })
      .addCase(findProducts.fulfilled, (state, { payload }) => { state.loading = false; state.products = payload; })
      .addCase(findProducts.rejected, (state, { payload }) => { state.loading = false; state.error = payload; })

      .addCase(findProductById.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(findProductById.fulfilled, (state, { payload }) => { state.loading = false; state.product = payload; })
      .addCase(findProductById.rejected, (state, { payload }) => { state.loading = false; state.error = payload; });
  },
});

export default productSlice.reducer;
