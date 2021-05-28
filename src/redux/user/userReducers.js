import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { loginSuccess, logOut } from "../auth/authActions";
import { resetError, setError } from "../error/erorAction";
import { setUserLoading } from "./userActions";

export const userReducer = createReducer(
  {},
  {
    [loginSuccess]: (_, { payload }) => ({ ...payload.user }),
    [logOut]: () => ({}),
  }
);

export const userLoaderReducer = createReducer(false, {
  [setUserLoading]: (state) => !state,
});
export const userErorrReducer = createReducer("", {
  [setError]: (_, { payload }) => payload,
  [resetError]: () => "",
});
export const userReducers = combineReducers({
  user: userReducer,
  loader: userLoaderReducer,
  erorr: userErorrReducer,
});
