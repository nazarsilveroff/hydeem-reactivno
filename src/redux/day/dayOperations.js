import BaseHttpService from "../../services/api";
import { getInfoForDay, getLocalDay } from "./dayActions";

const baseUrl = new BaseHttpService();

export const getSummaryForDayOperation = () => async (dispatch, getState) => {
  const dateFormat = require("dateformat");
  const now = new Date();
  const date = dateFormat(now, "isoDate");

  dispatch(getLocalDay(date));

  try {
    const { data } = await baseUrl.getSummaryForDayData(getState().localDay);
    dispatch(getInfoForDay(data));
  } catch (error) {}
};

