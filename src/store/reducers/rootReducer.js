import authReducer from "./authReducer";
import targetReducer from "./targetReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  auth: authReducer,
  target: targetReducer,
  firestore: firestoreReducer
});

export default rootReducer;
