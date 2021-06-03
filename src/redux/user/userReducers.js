import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { loginSuccess, logOut } from "../auth/authActions";
import { resetError, setError } from "../error/erorAction";
import { setUserLoading, getUserData } from "./userActions";

export const daysInfoReducer = createReducer([], {
  [getUserData]: (_, { payload }) => payload.days,
});

export const userDataReducer = createReducer(
  {},
  {
    [getUserData]: (_, { payload }) => payload.userData,
  }
);

export const userReducer = createReducer(
  {},
  {
    [loginSuccess]: (_, { payload }) => ({ ...payload.user }),
    [getUserData]: (_, { payload }) => ({
      email: payload.email,
      username: payload.username,
      id: payload.id,
    }),
    [logOut]: () => ({}),
  }
);

export const userLoaderReducer = createReducer(false, {
  [setUserLoading]: (state) => !state,
  [getUserData]: (state) => !state,
  [loginSuccess]: (state) => !state,
  [setError]: (state) => !state,
  [resetError]: (state) => !state,
  [logOut]: () => false,
});
export const userErorrReducer = createReducer("", {
  [setError]: (_, { payload }) => payload,
  [resetError]: () => "",
});
export const userReducers = combineReducers({
  userInfo: userReducer,
  userData: userDataReducer,
  daysInfo: daysInfoReducer,
  loader: userLoaderReducer,
  erorr: userErorrReducer,
});
