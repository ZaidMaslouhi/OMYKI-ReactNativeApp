import { configureStore } from "@reduxjs/toolkit";
import actionReducer from "./slices/action";
import accountReducer from "./slices/account";
import placeReducer from "./slices/place";
import shareReducer from "./slices/share";

export const store = configureStore({
  reducer: {
    action: actionReducer,
    account: accountReducer,
    place: placeReducer,
    share: shareReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
