import { createReducer } from '@reduxjs/toolkit';
import { getInfoForDay, getSelectedDay, addProduct, deleteProduct } from './dayActions';

export const getSelectedDayReducer = createReducer(
  {},
  {
    [getSelectedDay]: (_, { payload }) => ({ date: payload }),
  }
);

export const getInfoForDayReducer = createReducer(
  { eatenProducts: [] },
  {
    [getInfoForDay]: (_, { payload }) => payload,
    [addProduct]: (state, { payload }) => ({ ...state, eatenProducts: [...state.eatenProducts, payload] }),
    [deleteProduct]: (state, { payload }) => ({
      ...state,
      eatenProducts: state.eatenProducts.filter((product) => product.id !== payload)
    })
  }
);
