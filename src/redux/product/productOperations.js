
import BaseHttpService from "../../services/api";
import { getSearchProductSuccess } from "./productActions";

const baseURL = new BaseHttpService();

export const getSearchProductOperation = (value) => async (dispatch, getState) => {
    try {
        const { data } = await baseURL.searchProduct(value);
        dispatch(getSearchProductSuccess(data))
    } catch (error) {
        
    }
}
