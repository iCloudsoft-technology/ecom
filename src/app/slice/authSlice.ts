import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import EcomDataService from "../../services/api.service";

interface User {
  fullName?: string;
  email?: string;
  phonenumber?: string;
  password?: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  allUsers: any;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  allUsers: null,
};

const initialStateApp = {
  user: JSON.parse(localStorage.getItem("user") || "{}"),
  loading: false,
  error: null,
  allUsers: null,
};
export const loginUser = createAsyncThunk(
  "SignIn",
  async ({
    inputEmail,
    inputPassword,
    allUsers,
  }: {
    inputEmail: string;
    inputPassword: string;
    allUsers: any;
  }) => {
    try {
      // const response = EcomDataService.userLogin({
      //   username: inputEmail,
      //   password: inputPassword,
      // });
      return allUsers;
    } catch (error) {
      throw (error as any).response;
    }
  }
);

export const signUpUser = createAsyncThunk(
  "signUp",
  async ({ fullName, email, phonenumber, password }: User) => {
    try {
      const response = EcomDataService.userSignUp({
        fullName,
        email,
        phonenumber,
        password,
      });
      return response;
    } catch (error) {
      throw (error as any).response.data;
    }
  }
);

export const getAllUsers = createAsyncThunk("allUsers", async () => {
  try {
    const response: any = EcomDataService.allUsers();
    return response;
  } catch (error) {
    throw (error as any).response.data;
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: { ...initialStateApp },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action: any) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUpUser.fulfilled, (state, action: any) => {
        state.loading = false;
      })
      .addCase(signUpUser.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action: any) => {
        state.allUsers = action.payload.data;
        state.loading = false;
      })
      .addCase(getAllUsers.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
