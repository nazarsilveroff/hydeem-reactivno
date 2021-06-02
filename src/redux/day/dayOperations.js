import { toast } from "react-toastify";
import BaseHttpService from "../../services/api";
import { getSearchProductError } from "../product/productActions";
import { getInfoForDay } from "./dayActions";
import { addProduct, deleteProduct } from "./dayActions";

const baseUrl = new BaseHttpService();

export const getSummaryForDayOperation = () => async (dispatch, getState) => {
  const day = getState().selectedDate.date;
  try {
    const { data } = await baseUrl.getSummaryForDayData({ date: day });
    dispatch(getInfoForDay(data));
  } catch (error) {
    dispatch(
      getSearchProductError(
        toast.error(`🧐 Вы не ввели свои данные`, { autoClose: 2000 })
      )
    );
  }
};

export const addEatenProductOperation = (value) => async (dispatch) => {
  try {
    const { data } = await baseUrl.addEatenProduct(value);
    console.log(data);
    dispatch(addProduct(data));
  } catch (error) {
    console.log(`error`, error);
  }
};

export const deleteProductOperation =
  ({ eatenProductId, dayId }) =>
  async (dispatch) => {
    try {
      await baseUrl.delleteEatenProduct({ eatenProductId, dayId });
      dispatch(deleteProduct(eatenProductId));
      dispatch(getSummaryForDayOperation());
    } catch (error) {}
  };
