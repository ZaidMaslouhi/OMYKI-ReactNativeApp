import { createSlice } from "@reduxjs/toolkit";
import {
  getAllPlacesByUserThunk,
  deleteSharePlaceThunk,
  deleteGrantedPlaceThunk,
  getPlaceByAnonymousThunk,
} from "../thunks/place";

type PlaceStateType = {
  status: "Idle" | "Pending" | "Success" | "Error";
  message: string;
  data: any;
};

const PlaceInitState: PlaceStateType = {
  status: "Idle",
  message: "",
  data: null,
};

const placeSlice = createSlice({
  name: "place",
  initialState: PlaceInitState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getAllPlacesByUserThunk.pending ||
          deleteSharePlaceThunk.pending ||
          deleteGrantedPlaceThunk.pending ||
          getPlaceByAnonymousThunk.pending,
        (state, action) => {
          state.status = "Pending";
          state.message = "";
          state.data = null;
        }
      )
      .addCase(
        getAllPlacesByUserThunk.fulfilled ||
          deleteSharePlaceThunk.fulfilled ||
          deleteGrantedPlaceThunk.fulfilled ||
          getPlaceByAnonymousThunk.fulfilled,
        (state, action) => {
          state.status = "Success";
          if ("message" in action.payload)
            state.message = action.payload.message as string;
          if ("data" in action.payload) state.data = action.payload.data;
        }
      )
      .addCase(
        getAllPlacesByUserThunk.rejected ||
          deleteSharePlaceThunk.rejected ||
          deleteGrantedPlaceThunk.rejected ||
          getPlaceByAnonymousThunk.rejected,
        (state, action) => {
          state.data = null;
          state.status = "Error";
          state.message = (action.payload as Error).message;
        }
      );
  },
});

export default placeSlice.reducer;
