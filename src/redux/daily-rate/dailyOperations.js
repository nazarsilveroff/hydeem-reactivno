import BaseHttpService from "../../services/api";
import { getSummaryForDayOperation } from "../day/dayOperations";
import { getDailyRate } from "./dailyActions";
import { setLoading } from "../loading/loaderAction";

const baseHTTP = new BaseHttpService();

export const getDailyRateOperation =
  (userCharacteristics) => async (dispatch, getState) => {
    const accessToken = getState().authorization.tokens.accessToken;
    const userId = getState().user.userInfo.id;
    const values = {};
    for (const char of Object.keys(userCharacteristics)) {
      values[char] = Number(userCharacteristics[char]);
    }
    dispatch(setLoading());
    try {
      const { data } = await baseHTTP.getDailyRate(values, userId);
      dispatch(getDailyRate(data));
      if (accessToken) {
        dispatch(getSummaryForDayOperation());
      }
    } catch (error) {
      console.log(error);
    }
    finally {
    dispatch(setLoading());
  }
  };

