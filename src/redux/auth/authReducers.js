import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  clearError,
  loginError,
  loginRequest,
  loginSuccess,
  logOut,
  registerError,
  registerRequest,
  registerSuccess,
} from "./authActions";

export const tokenReducer = createReducer(
  {},
  {
    [registerSuccess]: (_, { payload }) => {},
    [loginSuccess]: (_, { payload }) => ({
      accessToken: payload.accessToken,
      refreshToken: payload.refreshToken,
      sid: payload.sid,
    }),
    [logOut]: () => ({}),
  }
);

export const loaderReducer = createReducer(false, {
  [registerRequest]: (state) => !state,
  [registerSuccess]: (state) => !state,
  [registerError]: (state) => !state,

  [loginRequest]: (state) => !state,
  [loginSuccess]: (state) => !state,
  [loginError]: (state) => !state,

  [logOut]: () => false,
});
export const erorrReducer = createReducer("", {
  [clearError]: () => null,
  [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [logOut]: () => "",
});
export const authReducers = combineReducers({
  tokens: tokenReducer,
  loader: loaderReducer,
  erorr: erorrReducer,
});
