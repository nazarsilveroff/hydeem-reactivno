import BaseHttpService from "../../services/api";
import { getSummaryForDayOperation } from "../day/dayOperations";
import {
  addEatenProductSuccess,
  deleteProductSuccess,
  getSearchProductSuccess,
} from "./productActions";

const baseURL = new BaseHttpService();

export const getSearchProductOperation =
  (value) => async (dispatch, getState) => {
    try {
      const { data } = await baseURL.searchProduct(value);
      dispatch(getSearchProductSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };

export const addEatenProductOperation = (value) => async (dispatch) => {
  try {
    const { data } = await baseURL.addEatenProduct(value);
    dispatch(addEatenProductSuccess(data));
    dispatch(getSummaryForDayOperation());
  } catch (error) {}
};

export const deleteProductOperation = (id) => async (dispatch) => {
  try {
    await baseURL.delleteEatenProduct(id);
    dispatch(deleteProductSuccess(id.eatenProductId));
    dispatch(getSummaryForDayOperation());
  } catch (error) {}
};
