import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppState, AppThunk } from "store/store";
import { HYDRATE } from "next-redux-wrapper";
import {IBannerResponse, IHomeSlice} from "features/home/banners/Banners.d";

const initialState: IBannerResponse = {
  customErrorCode: 0,
  systemErrorMessage: "",
  hasError: false,
  errorMessage: "",
  response: {}
};

export const homeSlice = createSlice({
  name: "homeState",
  initialState: initialState,
  reducers: {
    setData: (_state, action: PayloadAction<IHomeSlice>) => {
      return action.payload.homeState;
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action: PayloadAction<IHomeSlice>) => {
      return {
        ...state,
        ...action.payload.homeState
      };
    }
  }
});

export const fetchBanner =
  (dispatchData: IHomeSlice): AppThunk =>
    async (dispatch) => {
      dispatch(homeSlice.actions.setData(dispatchData));
    };

/*export const {} =
    factorySlice.actions;*/

export const getBanner = (state: AppState) => state.homeState;

export default homeSlice;
