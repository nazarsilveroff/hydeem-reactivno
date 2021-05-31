import BaseHttpService from "../../services/api";
import { getDailyRate } from "./dailyActions";

const baseHTTP = new BaseHttpService();
export const getDailyRateOperation =
  (userCharacteristics) => async (dispatch, getState) => {
    const userId = getState().user.userInfo.id;
    const values = {};
    for (const char of Object.keys(userCharacteristics)) {
      values[char] = Number(userCharacteristics[char]);
    }
    try {
      console.log(values);
      const { data } = await baseHTTP.getDailyRate(values, userId);
      console.log(data);
      dispatch(getDailyRate(data));
    } catch (error) {
      console.log(error);
    }
  };
