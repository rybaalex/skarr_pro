import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import navSlice from "components/common/header/nav/NavSlice";
import bannerSlice from "features/home/banners/BannerSlice";
import serviceSlice from "features/home/services/ServiceSlice";


const makeStore = () =>
  configureStore({
    reducer: {
      [navSlice.name]: navSlice.reducer,
      [bannerSlice.name]: bannerSlice.reducer,
      [serviceSlice.name]: serviceSlice.reducer,

    },
    devTools: true,
  });

// eslint-disable-next-line no-undef
export type AppStore = ReturnType<typeof makeStore>;
// eslint-disable-next-line no-undef
export type AppState = ReturnType<AppStore["getState"]>;
// eslint-disable-next-line no-undef
export type AppDispatch = AppStore["dispatch"];

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
