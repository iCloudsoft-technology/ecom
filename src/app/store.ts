import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import pageLoadReducer from "./slice/pageLoaderSlice";

const store: any = configureStore({
  reducer: {
    auth: authReducer,
    pageLoad: pageLoadReducer,
  },
});

export default store;
