import User from "../../interfaces/User";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  ShareTemporarily,
  RequestSharePermanently,
  RefuseShareTemporarily,
  AcceptShareTemporarily,
} from "../../services/share";

const shareTemporarilyThunk = createAsyncThunk(
  "configuration/ShareTemporarily",
  async ({
    id,
    fromUserId,
    requestedPlaceId,
    actionsIds,
    start,
    end,
  }: {
    id: string;
    fromUserId: string;
    requestedPlaceId: string;
    actionsIds: string[];
    start: Date;
    end: Date;
  }) => {
    const response = await ShareTemporarily({
      id,
      fromUserId,
      requestedPlaceId,
      actionsIds,
      start,
      end,
    });
    return response.success;
  }
);

const requestSharePermanentlyThunk = createAsyncThunk(
  "configuration/RequestSharePermanently",
  async ({
    id,
    fromUserId,
    requestedPlaceId,
    actionsIds,
    userRequested,
  }: {
    id: string;
    fromUserId: string;
    requestedPlaceId: string;
    actionsIds: string[];
    userRequested: User;
  }) => {
    const response = await RequestSharePermanently({
      id,
      fromUserId,
      requestedPlaceId,
      actionsIds,
      userRequested,
    });
    return response.success;
  }
);

const refuseShareTemporarilyThunk = createAsyncThunk(
  "configuration/RefuseShareTemporarily",
  async ({ requestId }: { requestId: string }) => {
    const response = await RefuseShareTemporarily({ requestId });
    return response.success;
  }
);

const AcceptShareTemporarilyThunk = createAsyncThunk(
  "configuration/AcceptShareTemporarily",
  async ({ requestId }: { requestId: string }) => {
    const response = await AcceptShareTemporarily({ requestId });
    return response.success;
  }
);

export {
  shareTemporarilyThunk,
  requestSharePermanentlyThunk,
  refuseShareTemporarilyThunk,
  AcceptShareTemporarilyThunk,
};
