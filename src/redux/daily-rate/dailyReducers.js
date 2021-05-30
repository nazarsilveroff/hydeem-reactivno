import { createReducer } from "@reduxjs/toolkit";
import { getDailyRate } from "./dailyActions";

export const getDailyRateReducer = createReducer(
  {},
  {
    [getDailyRate]: (_, { payload }) => payload,
  }
);
