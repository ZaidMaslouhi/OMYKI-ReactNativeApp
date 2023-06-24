import User from "../../interfaces/User";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  GetUserProfile,
  DisableAccount,
  UpdateUserProfile,
} from "../../services/account";

const updateUserProfileThunk = createAsyncThunk(
  "configuration/UpdateUserProfile",
  async ({ user, rankPlaces }: { user: User; rankPlaces: string[] }) => {
    const response = await UpdateUserProfile({ user, rankPlaces });
    return response.success;
  }
);

const disableAccountThunk = createAsyncThunk(
  "configuration/DisableAccount",
  async () => {
    const response = await DisableAccount();
    return response.success;
  }
);

const getUserProfileThunk = createAsyncThunk(
  "configuration/GetUserProfile",
  async () => {
    const response = await GetUserProfile();
    return response.success;
  }
);

export { updateUserProfileThunk, disableAccountThunk, getUserProfileThunk };
