import { createReducer } from "@reduxjs/toolkit";
import { getInfoForDay, getLocalDay } from "./dayActions";

export const getLocalDayReducer = createReducer(
  {},
  {
    [getLocalDay]: (_, { payload }) => ({ date: payload }),
  }
);

export const getInfoForDayReducer = createReducer(
  {},
  {
    [getInfoForDay]: (_, { payload }) => payload,
  }
);
