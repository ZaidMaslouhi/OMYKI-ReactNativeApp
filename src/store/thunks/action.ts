import { createAsyncThunk } from "@reduxjs/toolkit";
import { TrigAction, TrigActionByAnonymous } from "../../services/action";

const trigActionThunk = createAsyncThunk(
  "actions/TrigAction",
  async ({ actionId }: { actionId: string }) => {
    const response = await TrigAction({ actionId });
    return response.success;
  }
);

const trigActionByAnonymousThunk = createAsyncThunk(
  "actions/TrigActionByAnonymous",
  async ({
    anonymousToken,
    actionId,
  }: {
    anonymousToken: string;
    actionId: string;
  }) => {
    const response = await TrigActionByAnonymous({ anonymousToken, actionId });
    return response.success;
  }
);

export { trigActionThunk, trigActionByAnonymousThunk };
