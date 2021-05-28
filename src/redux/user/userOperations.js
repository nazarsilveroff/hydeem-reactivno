import axios from "axios";
import BaseHttpService from "../../services/api";
import { getUserData } from "./userActions";
const baseHttp = new BaseHttpService();

export const getUserOperation = () => async (dispatch, getState) => {
  //   axios.defaults.headers.Authorization = `Bearer ${
  //     getState().authorization.tokens.accessToken
  //   }`;
  try {
    // const { data } = await axios.get(
    //   `https://slimmom-backend.herokuapp.com/user`
    // );
    const { data } = await baseHttp.getUserInfo();
    dispatch(getUserData(data));
  } catch (error) {}
};
