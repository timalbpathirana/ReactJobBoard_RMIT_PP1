import app from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoR6Nvw8-wDf1He_u4aYag-xIMwzi7uh4",
  authDomain: "huntrrmit.firebaseapp.com",
  projectId: "huntrrmit",
  storageBucket: "huntrrmit.appspot.com",
  messagingSenderId: "821376129023",
  appId: "1:821376129023:web:bd86b19af7f3ba5de839ca",
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
export { firebase, firestore };
export default firebaseConfig;
