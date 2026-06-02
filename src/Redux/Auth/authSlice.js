import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import api, { API_BASE_URL } from "../../config/api";

export const register = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
      if (data.jwt) localStorage.setItem("jwt", data.jwt);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message ?? err.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
      if (data.jwt) localStorage.setItem("jwt", data.jwt);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message ?? err.message);
    }
  }
);

export const getUser = createAsyncThunk(
  "auth/getUser",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/api/users/profile");
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message ?? err.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, isLoading: false, error: null },
  reducers: {
    logout(state) {
      localStorage.removeItem("jwt");
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => { state.isLoading = true; state.error = null; })
      .addCase(register.fulfilled, (state) => { state.isLoading = false; })
      .addCase(register.rejected, (state, { payload }) => { state.isLoading = false; state.error = payload; })

      .addCase(login.pending, (state) => { state.isLoading = true; state.error = null; })
      .addCase(login.fulfilled, (state) => { state.isLoading = false; })
      .addCase(login.rejected, (state, { payload }) => { state.isLoading = false; state.error = payload; })

      .addCase(getUser.pending, (state) => { state.isLoading = true; })
      .addCase(getUser.fulfilled, (state, { payload }) => { state.isLoading = false; state.user = payload; })
      .addCase(getUser.rejected, (state, { payload }) => { state.isLoading = false; state.error = payload; });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
