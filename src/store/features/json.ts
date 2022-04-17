import { RootState } from './../index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const SLICE_NAME = 'json';

export interface JsonData {
  [key: string]: any;
}

export interface IState {
  selected: string[];
  data: JsonData;
}

const initialState: IState = {
  selected: [],
  data: {}
};

const jsonSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    parseAction: (state: IState, { payload }: PayloadAction<JsonData>) => {
      state.data = payload;
      return state;
    },
    resetAction: (state: IState) => {
      state = initialState;
      return state;
    },
    selectKey: (state: IState, { payload }: PayloadAction<string[]>) => {
      state.selected = payload;
      return state;
    }
  }
});

// export reducer, actions
const { reducer, actions } = jsonSlice;
export const { parseAction, resetAction, selectKey } = actions;
export const jsonSelector = (state: RootState) => state.json.data;
export const keySelector = (state: RootState) => state.json.selected;

export default reducer;
