import BaseHttpService from "../../services/api";
import {
  getSearchProductSuccess,
} from './productActions';

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
//
// export const addEatenProductOperation = (value) => async (dispatch) => {
//   try {
//     const { data } = await baseURL.addEatenProduct(value);
//     dispatch(addProductAction(data));
//   } catch (error) {}
// };
//
// export const deleteProductOperation = ({ eatenProductId, dayId }) => async (dispatch) => {
//   try {
//     await baseURL.delleteEatenProduct({ eatenProductId, dayId });
//     dispatch(deleteProductAction(eatenProductId));
//   } catch (error) {}
// };
