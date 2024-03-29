import { configureStore , combineReducers } from "@reduxjs/toolkit";
import  UserReducer  from "./Userslice";
import ProductRedux from "./ProductRedux";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import productSlice from "./ProductRedux"
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({user:UserReducer,product:ProductRedux,})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
let persistor = persistStore(store);
export {persistor};