import { toast } from "react-toastify";
import BaseHttpService from "../../services/api";
import {
  getSearchProductError,
  getSearchProductSuccess,
} from "./productActions";
// import { setLoading } from "../loading/loaderAction";

const baseURL = new BaseHttpService();

export const getSearchProductOperation = (value) => async (dispatch) => {
  // dispatch(setLoading());
  try {
    const { data } = await baseURL.searchProduct(value);

    dispatch(getSearchProductSuccess(data));
  } catch (error) {
    dispatch(
      getSearchProductError(toast.error(`😥 Не могу найти такой продукт`))
    );
  } finally {
    // dispatch(setLoading());
  }
};
