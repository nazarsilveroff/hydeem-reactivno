import { toast } from "react-toastify";
import BaseHttpService from "../../services/api";
import { getSearchProductError, resetSearch } from "../product/productActions";
import { getInfoForDay } from "./dayActions";
import { addProduct, deleteProduct } from "./dayActions";
import { setLoading } from "../loading/loaderAction";

const baseUrl = new BaseHttpService();

export const getSummaryForDayOperation = () => async (dispatch, getState) => {
  const day = getState().selectedDate.date;
  // dispatch(setLoading());
  try {
    const { data } = await baseUrl.getSummaryForDayData({ date: day });

    dispatch(getInfoForDay(data));
  } catch (error) {
    dispatch(
      getSearchProductError(
        toast.error(`🧐 Вы не ввели свои данные`, { autoClose: 2000 })
      )
    );
  } finally {
    // dispatch(setLoading());
  }
};

export const addEatenProductOperation = (value) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const { data } = await baseUrl.addEatenProduct(value);

    dispatch(addProduct(data));
    dispatch(resetSearch());
  } catch (error) {
    console.log(`error`, error);
  } finally {
    dispatch(setLoading());
  }
};

export const deleteProductOperation =
  ({ eatenProductId, dayId }) =>
  async (dispatch) => {
    dispatch(setLoading());
    try {
      await baseUrl.delleteEatenProduct({ eatenProductId, dayId });

      dispatch(deleteProduct(eatenProductId));
      dispatch(getSummaryForDayOperation());
    } catch (error) {
    } finally {
      dispatch(setLoading());
    }
  };
