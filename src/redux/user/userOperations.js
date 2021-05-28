import BaseHttpService from "../../services/api";
import { getUserData } from "./userActions";
const baseHttp = new BaseHttpService();

export const getUserOperation = () => async (dispatch) => {
  try {
    const { data } = await baseHttp.getUserInfo();
    dispatch(getUserData(data));
  } catch (error) {}
};
