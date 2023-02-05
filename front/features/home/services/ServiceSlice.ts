import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {AppState, AppThunk} from "store/store";
import {HYDRATE} from "next-redux-wrapper";
import {IServiceResponse, IServiceSlice} from "features/home/services/Service";

const initialState: IServiceResponse = {
    customErrorCode: 0,
    systemErrorMessage: "",
    hasError: false,
    errorMessage: "",
    response: []
};

export const serviceSlice = createSlice({
    name: "serviceState",
    initialState: initialState,
    reducers: {
        setData: (_state, action: PayloadAction<IServiceSlice>) => {
            return action.payload.serviceState;
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action: PayloadAction<IServiceSlice>) => {
            return {
                ...state,
                ...action.payload.serviceState
            };
        }
    }
});

export const fetchService =
    (dispatchData: IServiceSlice): AppThunk =>
        async (dispatch) => {
            dispatch(serviceSlice.actions.setData(dispatchData));
        };

/*export const {} =
    factorySlice.actions;*/

export const getService = (state: AppState) => state.serviceState;

export default serviceSlice;
