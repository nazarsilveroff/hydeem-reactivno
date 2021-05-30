import {
  configureStore,
  getDefaultMiddleware,
  // getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { authReducers } from "./auth/authReducers";

import { persistReducer, persistStore } from "redux-persist";

import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { userReducers } from "./user/userReducers";
import { getInfoForDayReducer, getLocalDayReducer } from "./day/dayReducers";
import { getDailyRateReducer } from "./daily-rate/dailyReducers";

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
    whitelist: ["tokens"],
  },
  authReducers
);

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
export const store = configureStore({
  reducer: {
    authorization: persistedReducer,
    user: userReducers,
    localDay: getLocalDayReducer,
    infoForDay: getInfoForDayReducer,
    dailyRate: getDailyRateReducer,
  },
  middleware: middleware,
});

export const persistor = persistStore(store);
