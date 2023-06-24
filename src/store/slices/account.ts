import { createSlice } from "@reduxjs/toolkit";
import {
  updateUserProfileThunk,
  disableAccountThunk,
  getUserProfileThunk,
} from "../thunks/account";

type AccountStateType = {
  status: "Idle" | "Pending" | "Success" | "Error";
  message: string;
  data: any;
};

const AccountInitState: AccountStateType = {
  status: "Idle",
  message: "",
  data: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState: AccountInitState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        updateUserProfileThunk.pending ||
          disableAccountThunk.pending ||
          getUserProfileThunk.pending,
        (state, action) => {
          state.status = "Pending";
          state.message = "";
          state.data = null;
        }
      )
      .addCase(
        updateUserProfileThunk.fulfilled ||
          disableAccountThunk.fulfilled ||
          getUserProfileThunk.fulfilled,
        (state, action) => {
          state.status = "Success";
          if ("message" in action.payload)
            state.message = action.payload.message;
          if ("data" in action.payload) state.data = action.payload.data;
        }
      )
      .addCase(
        updateUserProfileThunk.rejected ||
          disableAccountThunk.rejected ||
          getUserProfileThunk.rejected,
        (state, action) => {
          state.data = null;
          state.status = "Error";
          state.message = (action.payload as Error).message;
        }
      );
  },
});

export default accountSlice.reducer;
