import BaseHttpService from "../../services/api";
import { getUserData } from "./userActions";
import { setLoading } from "../loading/loaderAction";
const baseHttp = new BaseHttpService();

export const getUserOperation = () => async dispatch => {
  try {
    const { data } = await baseHttp.getUserInfo();
    dispatch(setLoading());
    dispatch(getUserData(data));
  } catch (error) {
  } finally {
    dispatch(setLoading());
  }
};
