import firebase from "firebase/app";
import firebaseConfig from "./firebase.config";
import "firebase/firestore";

export const initializeDatabaseFramework = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
};
