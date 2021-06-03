import { combineReducers, createReducer } from "@reduxjs/toolkit";

import { addEatenProductSuccess, getSearchProductSuccess } from "./productActions";

export const getSearchProductReducer = createReducer([], {
  [getSearchProductSuccess]: (_, { payload }) => payload

import {
  addEatenProductSuccess,
  getSearchProductSuccess,
  resetSearch,
} from "./productActions";

export const getSearchProductReducer = createReducer([], {
  [getSearchProductSuccess]: (_, { payload }) => payload,
  [resetSearch]: () => [],

});

export const dayProductReducer = createReducer(
  {},
  {
    [addEatenProductSuccess]: (_, { payload }) => ({ day: payload.day })
  }
);

export const daySummaryReducer = createReducer(
  {},
  {
    [addEatenProductSuccess]: (_, { payload }) => ({
      daySummary: payload.daySummary
    })
  }
);

export const productsReducer = combineReducers({
  dayProduct: dayProductReducer,
  daySummary: daySummaryReducer
});

export const loaderProductReducer = createReducer(false, {
  [getSearchProductSuccess]: state => !state,
  [addEatenProductSuccess]: state => !state
});
