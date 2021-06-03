import { toast } from "react-toastify";
import BaseHttpService from "../../services/api";
import { getSearchProductError } from "../product/productActions";
import { getInfoForDay } from "./dayActions";
import { addProduct, deleteProduct } from "./dayActions";
import { setLoading } from "../loading/loaderAction";

const baseUrl = new BaseHttpService();

export const getSummaryForDayOperation = () => async (dispatch, getState) => {
  const day = getState().selectedDate.date;
  try {
    const { data } = await baseUrl.getSummaryForDayData({ date: day });
    dispatch(setLoading());
    dispatch(getInfoForDay(data));
  } catch (error) {
    dispatch(getSearchProductError(toast.error(`🧐 Вы не ввели свои данные`, { autoClose: 2000 })));
  } finally {
    dispatch(setLoading());
  }
};

export const addEatenProductOperation = value => async dispatch => {
  try {
    const { data } = await baseUrl.addEatenProduct(value);
    dispatch(setLoading());
    dispatch(addProduct(data));
  } catch (error) {
    console.log(`error`, error);
  } finally {
    dispatch(setLoading());
  }
};

export const deleteProductOperation = ({ eatenProductId, dayId }) => async dispatch => {
  try {
    await baseUrl.delleteEatenProduct({ eatenProductId, dayId });
    dispatch(setLoading());
    dispatch(deleteProduct(eatenProductId));
    dispatch(getSummaryForDayOperation());
  } catch (error) {
  } finally {
    dispatch(setLoading());
  }
};
