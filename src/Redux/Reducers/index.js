import { combineReducers } from "redux";
import {
  rentContentReducer,
  rentInfoReducer,
  buyContentReducer,
  buyInfoReducer,
} from "./Reducer";

const reducers = combineReducers({
  rentContentReducer: rentContentReducer,
  rentInfoReducer: rentInfoReducer,
  buyContentReducer: buyContentReducer,
  buyInfoReducer: buyInfoReducer,
});

export default reducers;
