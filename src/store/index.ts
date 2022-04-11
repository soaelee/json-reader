import { combineReducers, configureStore } from "@reduxjs/toolkit";
import json from "store/features/json";

const rootReducer = combineReducers({ json });

export default configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
