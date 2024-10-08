import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger"; 
import jobsSlice from "../reducers/job.reducer";


const persistConfig = {
  key: "root", 
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({ 
    interview: jobsSlice
  })
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: true,
});

const persistor = persistStore(store);

export { store, persistor };
