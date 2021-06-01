import BaseHttpService from "../../services/api";
import { getInfoForDay } from "./dayActions";

const baseUrl = new BaseHttpService();

export const getSummaryForDayOperation = () => async (dispatch, getState) => {
  try {
    const { data } = await baseUrl.getSummaryForDayData(
      getState().selectedDate
    );
    dispatch(getInfoForDay(data));
  } catch (error) {}
};
