import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";

const store: any = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
