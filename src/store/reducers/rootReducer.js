import authReducer from "./authReducer";
import targetReducer from "./targetReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  target: targetReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
