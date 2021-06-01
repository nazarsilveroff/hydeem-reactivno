import { createAction } from "@reduxjs/toolkit";

export const getSearchProductRequest = createAction("getSearchProduct");
export const getSearchProductSuccess = createAction("getSearchProductSuccess");
export const addEatenProductSuccess = createAction("addEatenProductSuccess");
export const deleteProductSuccess = createAction('deleteProductSuccess');