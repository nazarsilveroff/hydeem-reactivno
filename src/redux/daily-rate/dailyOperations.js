import BaseHttpService from "../../services/api";
import { getDailyRate } from "./dailyActions";

const baseHTTP = new BaseHttpService();
export const getDailyRateOperation =
  (userCharacteristics) => async (dispatch, getState) => {
    const userId = getState().user.userInfo.id;
    try {
      const { data } = await baseHTTP.getDailyRate(userCharacteristics, userId);
      dispatch(getDailyRate(data));
    } catch (error) {}
  };
