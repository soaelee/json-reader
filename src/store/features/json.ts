import { RootState } from "./../index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const SLICE_NAME = "json";

export interface TState {
  selected: string[];
  data: { [key: string]: any };
}

const initialState: TState = {
  selected: [],
  data: {},
};

const jsonSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    parseAction: (
      state: TState,
      { payload }: PayloadAction<{ [key: string]: any }>
    ) => {
      state.data = payload;
      return state;
    },
    resetAction: (state: TState) => {
      state = initialState;
      return state;
    },
    selectKey: (state: TState, { payload }: PayloadAction<string[]>) => {
      state.selected = payload;
      return state;
    },
  },
});

// export reducer, actions
const { reducer, actions } = jsonSlice;
export const { parseAction, resetAction, selectKey } = actions;
export const jsonSelector = (state: RootState) => state.json.data;
export const keySelector = (state: RootState) => state.json.selected;

export default reducer;
