import { toast } from "react-toastify";
import BaseHttpService from "../../services/api";
import {
  getSearchProductError,
  getSearchProductSuccess,
} from "./productActions";

const baseURL = new BaseHttpService();

export const getSearchProductOperation = (value) => async (dispatch) => {
  try {
    const { data } = await baseURL.searchProduct(value);
    dispatch(getSearchProductSuccess(data));
  } catch (error) {
    dispatch(
      getSearchProductError(toast.error(`😥 Не могу найти такой продукт`))
    );
  }
};
