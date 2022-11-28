import { applyMiddleware, createStore } from "redux";
import reducers from "./Reducers/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { configureStore } from '@reduxjs/toolkit'

const middleware = [thunk];

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
 

const persistor = persistStore(store);

export default store;
export { persistor };
