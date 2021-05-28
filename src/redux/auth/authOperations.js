import BaseHttpService from "../../services/api";
import {
  loginError,
  loginRequest,
  loginSuccess,
  registerError,
  registerRequest,
  registerSuccess,
} from "./authActions";
// const API = process.env.REACT_APP_API_KEY;
const baseHttp = new BaseHttpService();
export const registerOperations = (user) => async (dispatch) => {
  dispatch(registerRequest());

  try {
    const { data } = await baseHttp.register(user);
    dispatch(registerSuccess(data));
    dispatch(loginOperations({ email: user.email, password: user.password }));
  } catch (error) {
    dispatch(registerError(error.response.error.message));
  } finally {
  }
};
export const loginOperations = (user) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const { data } = await baseHttp.login(user);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginError(error.response));
  } finally {
  }
};
