import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppState, AppThunk } from "store/store";
import { HYDRATE } from "next-redux-wrapper";
import {
  INavResponse, INavSlice
} from "components/common/header/nav/nav.d";

const initialState: INavResponse = {
  customErrorCode: 0,
  systemErrorMessage: "",
  hasError: false,
  errorMessage: "",
  response: []
};

export const navSlice = createSlice({
  name: "navState",
  initialState: initialState,
  reducers: {
    setData: (_state, action: PayloadAction<INavSlice>) => {
      return action.payload.navState;
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action: PayloadAction<INavSlice>) => {
      return {
        ...state,
        ...action.payload.navState
      };
    }
  }
});

export const fetchMenu =
  (dispatchData: INavSlice): AppThunk =>
    async (dispatch) => {
      dispatch(navSlice.actions.setData(dispatchData));
    };

/*export const {} =
    factorySlice.actions;*/

export const getMenu = (state: AppState) => state.navState;

export default navSlice;
