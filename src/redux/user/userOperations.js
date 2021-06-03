import BaseHttpService from "../../services/api";
import { getUserData } from "./userActions";
import { setLoading } from "../loading/loaderAction";
const baseHttp = new BaseHttpService();

export const getUserOperation = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const { data } = await baseHttp.getUserInfo();

    dispatch(getUserData(data));
  } catch (error) {
  } finally {
    dispatch(setLoading());
  }
};
