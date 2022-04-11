import { RootState } from "./../index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const SLICE_NAME = "json";

export interface TState {
  [key: string]: any;
}

const initialState: TState = {};

const jsonSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    parseAction: (state: TState, { payload }: PayloadAction<string>) => {
      return (state = JSON.parse(payload));
    },
    resetAction: (state: TState) => {
      return (state = {});
    },
  },
});

// export reducer, actions
const { reducer, actions } = jsonSlice;
export const { parseAction, resetAction } = actions;
export const jsonSelector = (state: RootState) => state.json;

export default reducer;
