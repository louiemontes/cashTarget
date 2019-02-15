import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyB5y5cj19FwIYFo_DwcaglsNAcyoaKG0LY",
  authDomain: "louiemontes-cash-target.firebaseapp.com",
  databaseURL: "https://louiemontes-cash-target.firebaseio.com",
  projectId: "louiemontes-cash-target",
  storageBucket: "louiemontes-cash-target.appspot.com",
  messagingSenderId: "560433801209"
};
firebase.initializeApp(config);
firebase.firestore();

export default firebase;
