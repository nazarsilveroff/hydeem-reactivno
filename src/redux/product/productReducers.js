import { createReducer } from "@reduxjs/toolkit";
import { getSearchProductSuccess } from "./productActions";

export const getSearchProductReducer = createReducer([], {
    [getSearchProductSuccess]: (_, {payload}) => payload,
})