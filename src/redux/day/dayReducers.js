import { createReducer } from "@reduxjs/toolkit";
import {
  getInfoForDay,
  getSelectedDay,
  addProduct,
  deleteProduct,
} from "./dayActions";

export const getSelectedDayReducer = createReducer(
  {},
  {
    [getSelectedDay]: (_, { payload }) => ({ date: payload }),
    [getInfoForDay]: (state, { payload }) => ({ ...state, id: payload.id }),
    [addProduct]: (state, { payload }) => ({
      ...state,
      id: payload.newDay?.id || payload.day?.id,
    }),
  }
);

export const eatenProducts = createReducer([], {
  [addProduct]: (state, { payload }) => [...state, payload.eatenProduct],
  [getInfoForDay]: (_, { payload }) => payload.eatenProducts || [],
  [deleteProduct]: (state, { payload }) =>
    state.filter((product) => product.id !== payload),
});

export const getInfoForDayReducer = createReducer([], {
  [getInfoForDay]: (_, { payload }) => payload,

  [addProduct]: (_, { payload }) => ({
    // ...state,
    // daySummary: payload.newSummary ? payload.newSummary : payload.daySummary,
    ...payload.newDay,
    ...payload,
  }),
  // [deleteProduct]: (state, { payload }) => ({
  //   ...state,
  //   eatenProducts: state.eatenProducts.filter(
  //     (product) => product.id !== payload
  //   ),
  // }),
});

export const daySummary = createReducer(
  {},
  {
    [getInfoForDay]: (_, { payload }) =>
      payload.newSummary || payload.daySummary || {},
    [addProduct]: (_, { payload }) => payload.newSummary || payload.daySummary,
    [deleteProduct]: (_, { payload }) =>
      payload.newSummary || payload.daySummary,
  }
);
