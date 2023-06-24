import { createSlice } from "@reduxjs/toolkit";
import { trigActionByAnonymousThunk, trigActionThunk } from "../thunks/action";

type ActionStateType = {
  status: "Idle" | "Pending" | "Success" | "Error";
  message: string;
};

const ActionInitState: ActionStateType = {
  status: "Idle",
  message: "",
};

const actionSlice = createSlice({
  name: "action",
  initialState: ActionInitState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        trigActionThunk.pending || trigActionByAnonymousThunk.pending,
        (state, action) => {
          state.status = "Pending";
          state.message = "";
        }
      )
      .addCase(
        trigActionThunk.fulfilled || trigActionByAnonymousThunk.fulfilled,
        (state, action) => {
          state.status = "Success";
          state.message = action.payload.message;
        }
      )
      .addCase(
        trigActionThunk.rejected || trigActionByAnonymousThunk.rejected,
        (state, action) => {
          state.status = "Error";
          state.message = (action.payload as Error).message;
        }
      );
  },
});

export default actionSlice.reducer;
