import authReducer from "./authReducer";
import targetReducer from "./targetReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  target: targetReducer
});

export default rootReducer;
