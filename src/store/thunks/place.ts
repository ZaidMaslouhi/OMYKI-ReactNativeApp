import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  GetAllPlacesByUser,
  DeleteSharePlace,
  DeleteGrantedPlace,
  GetPlaceByAnonymous,
} from "../../services/place";

const getAllPlacesByUserThunk = createAsyncThunk(
  "configuration/GetAllPlacesByUser",
  async () => {
    const response = await GetAllPlacesByUser();
    return response.success;
  }
);

const deleteSharePlaceThunk = createAsyncThunk(
  "configuration/DeleteSharePlace",
  async ({ placeId }: { placeId: string }) => {
    const response = await DeleteSharePlace({ placeId });
    return response.success;
  }
);

const deleteGrantedPlaceThunk = createAsyncThunk(
  "configuration/DeleteGrantedPlace",
  async ({ placeId }: { placeId: string }) => {
    const response = await DeleteGrantedPlace({ placeId });
    return response.success;
  }
);

const getPlaceByAnonymousThunk = createAsyncThunk(
  "configuration/GetPlaceByAnonymous",
  async ({ anonymousToken }: { anonymousToken: string }) => {
    const response = await GetPlaceByAnonymous({ anonymousToken });
    return response.success;
  }
);

export {
  getAllPlacesByUserThunk,
  deleteSharePlaceThunk,
  deleteGrantedPlaceThunk,
  getPlaceByAnonymousThunk,
};
