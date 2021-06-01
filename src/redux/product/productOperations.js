
import BaseHttpService from "../../services/api";
import { addEatenProductSuccess, deleteProductSuccess, getSearchProductSuccess } from "./productActions";

const baseURL = new BaseHttpService();

export const getSearchProductOperation = (value) => async (dispatch, getState) => {
    try {
        const { data } = await baseURL.searchProduct(value);
        dispatch(getSearchProductSuccess(data))
    } catch (error) {
        console.log(error)
    }
}

export const addEatenProductOperation = (value) => async (dispatch) => {
    try {
      const {data} = await baseURL.addEatenProduct(value);
      dispatch(addEatenProductSuccess(data));
    } catch (error) {
      
    }
  }

export const deleteProductOperation = (id) => async (dispatch) => {
    try {
        const {data} = await baseURL.delleteEatenProduct(id)
        dispatch(deleteProductSuccess(data))
    } catch (error) {
        
    }
}