import { combineReducers } from "redux";
import {
  rentContentReducer,
  rentInfoReducer,
  buyContentReducer,
  buyInfoReducer,
  userReducer,
  loginReducer,
  logoutReducer,
  setUserReducer,
  userDataReducer,
  keywordChange,
  searchTag,
} from "./Reducer";

const reducers = combineReducers({
  rentContentReducer: rentContentReducer,
  rentInfoReducer: rentInfoReducer,
  buyContentReducer: buyContentReducer,
  buyInfoReducer: buyInfoReducer,
  userReducer: userReducer,
  loginReducer: loginReducer,
  logoutReducer: logoutReducer,
  setUser: setUserReducer,
  userDataReducer: userDataReducer,
  keywordChange: keywordChange,
  searchTag: searchTag,
});

export default reducers;
