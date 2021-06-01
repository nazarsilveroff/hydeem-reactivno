import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  addEatenProductSuccess,
  deleteProductSuccess,
  getSearchProductSuccess,
} from "./productActions";

export const getSearchProductReducer = createReducer([], {
  [getSearchProductSuccess]: (_, { payload }) => payload,
});

export const dayProductReducer = createReducer(
  {},
  {
    [addEatenProductSuccess]: (_, { payload }) => ({ day: payload.day }),
  }
);

export const daySummaryReducer = createReducer(
  {},
  {
    [addEatenProductSuccess]: (_, { payload }) => ({
      daySummary: payload.daySummary,
    }),
  }
);

export const eatenProductReducer = createReducer(
  {},
  {
    [addEatenProductSuccess]: (_, { payload }) => ({
      eatenProduct: payload.eatenProducts,
    }),
    // [deleteProductSuccess]: (state, { payload }) => {
    //   console.log(payload);
    //   return {
    //     ...state,
    //     infoForDay: {
    //       ...state.infoForDay,
    //       eatenProducts: state.infoForDay.eatenProducts.filter(
    //         (product) => product.id !== payload
    //       ),
    //     },
    //   };
    // },
  }
);

// export const deleteProductReducer = createReducer(
//   {},
//   {
//     [deleteProductSuccess]: (_, { payload }) => payload,
//   }
// );
export const deleteProductReducer = createReducer(
  {},
  {
    [deleteProductSuccess]: (state, { payload }) => [
      ...state,
      state.infoForDay.eatenProducts.filter(
        (product) => product.id !== payload
      ),
    ],
  }
);

export const productsReducer = combineReducers({
  dayProduct: dayProductReducer,
  daySummary: daySummaryReducer,
  eatenProduct: eatenProductReducer,
});
