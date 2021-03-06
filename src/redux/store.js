import {
  configureStore,
  getDefaultMiddleware
  // getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { authReducers } from "./auth/authReducers";

import { persistReducer, persistStore } from "redux-persist";

import storage from "redux-persist/lib/storage";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { userReducers } from "./user/userReducers";
import { daySummary, eatenProducts, getInfoForDayReducer, getSelectedDayReducer } from "./day/dayReducers";
import { getSearchProductReducer } from "./product/productReducers";
import { getDailyRateReducer } from "./daily-rate/dailyReducers";
import { openModalReducer } from "./modal/modalReducers";
import { loaderReducer } from "./loading/loaderReducer";

// const rootReduser = combineReducers({
//   items: itemsReduser,
//   filter: filterReducer,
//   loader: loaderReducer,
//   error: errorReducer,
// });

const persistedReducer = persistReducer(
  {
    key: "authorization",
    storage,
    whitelist: ["tokens"]
  },
  authReducers
);

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
];

export const store = configureStore({
  reducer: {
    daySummary: daySummary,
    eatenProducts: eatenProducts,
    authorization: persistedReducer,
    user: userReducers,
    selectedDate: getSelectedDayReducer,
    infoForDay: getInfoForDayReducer,
    searchedProducts: getSearchProductReducer,
    dailyRate: getDailyRateReducer,
    openModal: openModalReducer,
    loading: loaderReducer
  },
  middleware: middleware
});

export const persistor = persistStore(store);
