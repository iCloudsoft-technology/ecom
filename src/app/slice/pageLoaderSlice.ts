import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialStateApp = {
  isPageLoading: false,
};

export const loadPage = createAsyncThunk(
  "LoadPage",
  async (isPageLoad: boolean) => {
    try {
      return isPageLoad;
    } catch (error) {
      throw error;
    }
  }
);

const authSlice = createSlice({
  name: "pageLoad",
  initialState: { ...initialStateApp },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadPage.fulfilled, (state, action: any) => {
      state.isPageLoading = action.payload;
    });
  },
});

export default authSlice.reducer;
