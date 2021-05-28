import { createAction } from "@reduxjs/toolkit";

export const registerRequest = createAction("authorization/registerRequest");
export const registerSuccess = createAction("authorization/registerSuccess");
export const registerError = createAction("authorization/registerError");

export const loginRequest = createAction("authorization/loginRequest");
export const loginSuccess = createAction("authorization/loginSuccess");
export const loginError = createAction("authorization/loginError");

export const logOut = createAction("authorization/logOut");
