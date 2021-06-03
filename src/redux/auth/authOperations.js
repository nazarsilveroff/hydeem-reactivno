import BaseHttpService from "../../services/api";
import {
  loginError,
  loginRequest,
  loginSuccess,
  registerError,
  registerRequest,
  registerSuccess,
} from "./authActions";
import { toast } from "react-toastify";

const baseHttp = new BaseHttpService();
export const registerOperations = (user) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const { data } = await baseHttp.register(user);
    dispatch(registerSuccess(data));
    toast.success(`Вы зарегистрировались`);
    dispatch(loginOperations({ email: user.email, password: user.password }));
  } catch (error) {
    // console.log("error:> ", error.response.data);
    dispatch(registerError(error.response.data.message));
    toast.error(error.response.data.message);
  } finally {
  }
};
export const loginOperations = (user) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const { data } = await baseHttp.login(user);
    dispatch(loginSuccess(data));
    toast.success(`Добро пожаловоть`);
  } catch (error) {
    dispatch(loginError(error.response.data.message));
    toast.error(error.response.data.message);
  } finally {
  }
};
