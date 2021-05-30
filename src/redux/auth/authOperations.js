import BaseHttpService from "../../services/api";
import {
  loginError,
  loginRequest,
  loginSuccess,
  registerError,
  registerRequest,
  registerSuccess,
} from "./authActions";
const baseHttp = new BaseHttpService();
export const registerOperations = (user) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const { data } = await baseHttp.register(user);
    dispatch(registerSuccess(data));
    dispatch(loginOperations({ email: user.email, password: user.password }));
  } catch (error) {
    console.log("error:> ", error.response.data.message);
    dispatch(registerError(error.response.data.message));
  } finally {
  }
};
export const loginOperations = (user) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const { data } = await baseHttp.login(user);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginError(error.response.data.message));
  } finally {
  }
};
