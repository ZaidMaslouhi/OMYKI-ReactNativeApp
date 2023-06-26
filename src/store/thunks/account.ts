import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  GetUserProfile,
  DisableAccount,
  UpdateUserProfile,
} from "../../services/account";
import { UserProfile } from "../../interfaces/User";

const updateUserProfileThunk = createAsyncThunk(
  "configuration/UpdateUserProfile",
  async ({ profile, rankPlaces }: { profile: UserProfile; rankPlaces: string[] }) => {
    const response = await UpdateUserProfile({ profile, rankPlaces });
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
