import { createAction } from "@reduxjs/toolkit";

export const getSearchProductRequest = createAction("getSearchProduct");
export const getSearchProductSuccess = createAction("getSearchProductSuccess");
export const resetSearch = createAction("resetSearch");