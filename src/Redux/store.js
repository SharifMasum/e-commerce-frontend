import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth/authSlice";
import productReducer from "./Customers/productSlice";
import cartReducer from "./Customers/cartSlice";
import orderReducer from "./Customers/orderSlice";
import reviewReducer from "./Customers/reviewSlice";
import paymentReducer from "./Customers/paymentSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    cart: cartReducer,
    order: orderReducer,
    review: reviewReducer,
    payment: paymentReducer,
  },
});
