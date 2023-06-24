import { createSlice } from "@reduxjs/toolkit";
import {
  shareTemporarilyThunk,
  requestSharePermanentlyThunk,
  refuseShareTemporarilyThunk,
  AcceptShareTemporarilyThunk,
} from "../thunks/share";

type ShareStateType = {
  status: "Idle" | "Pending" | "Success" | "Error";
  message: string;
  data: any;
};

const ShareInitState: ShareStateType = {
  status: "Idle",
  message: "",
  data: null,
};

const shareSlice = createSlice({
  name: "share",
  initialState: ShareInitState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        shareTemporarilyThunk.pending ||
          requestSharePermanentlyThunk.pending ||
          refuseShareTemporarilyThunk.pending ||
          AcceptShareTemporarilyThunk.pending,
        (state, action) => {
          state.status = "Pending";
          state.message = "";
          state.data = null;
        }
      )
      .addCase(
        shareTemporarilyThunk.fulfilled ||
          requestSharePermanentlyThunk.fulfilled ||
          refuseShareTemporarilyThunk.fulfilled ||
          AcceptShareTemporarilyThunk.fulfilled,
        (state, action) => {
          state.status = "Success";
          if ("message" in action.payload)
            state.message = action.payload.message as string;
          if ("data" in action.payload) state.data = action.payload.data;
        }
      )
      .addCase(
        shareTemporarilyThunk.rejected ||
          requestSharePermanentlyThunk.rejected ||
          refuseShareTemporarilyThunk.rejected ||
          AcceptShareTemporarilyThunk.rejected,
        (state, action) => {
          state.data = null;
          state.status = "Error";
          state.message = (action.payload as Error).message;
        }
      );
  },
});

export default shareSlice.reducer;
