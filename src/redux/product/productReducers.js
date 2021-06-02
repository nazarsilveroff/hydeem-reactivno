import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  addEatenProductSuccess,
  getSearchProductSuccess,
} from "./productActions";

export const getSearchProductReducer = createReducer([], {
  [getSearchProductSuccess]: (_, { payload }) => payload,
});

export const dayProductReducer = createReducer(
  {},
  {
    [addEatenProductSuccess]: (_, { payload }) => ({ day: payload.day }),
  }
);

export const daySummaryReducer = createReducer(
  {},
  {
    [addEatenProductSuccess]: (_, { payload }) => ({
      daySummary: payload.daySummary,
    }),
  }
);

export const productsReducer = combineReducers({
  dayProduct: dayProductReducer,
  daySummary: daySummaryReducer,
});
