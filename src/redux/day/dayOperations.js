import BaseHttpService from "../../services/api";
import { getInfoForDay } from "./dayActions";
import { addProduct, deleteProduct } from "./dayActions";

const baseUrl = new BaseHttpService();

export const getSummaryForDayOperation = () => async (dispatch, getState) => {
  try {
    const { data } = await baseUrl.getSummaryForDayData(
      getState().selectedDate
    );
    console.log(`data`, data);
    dispatch(getInfoForDay(data));
  } catch (error) {}
};

export const addEatenProductOperation = (value) => async (dispatch) => {
  try {
    const { data } = await baseUrl.addEatenProduct(value);
    console.log(data);
    dispatch(addProduct(data));
    // dispatch(getSummaryForDayOperation());
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
      // dispatch(getSummaryForDayOperation());
    } catch (error) {}
  };
