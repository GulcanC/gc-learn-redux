import counterReducer from "./counterReducer";
import colorReducer from "./colorReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
  counterReducer,
  colorReducer,
});

export default reducers;
