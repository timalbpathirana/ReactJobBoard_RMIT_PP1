import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import NewLogin from "./NewLogin";
import "firebase/auth";

import "./Login.css";

const Signup = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("");
  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };
  const clearError = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearError();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.messsage);
            break;
          case "auth/wrong-password":
            setPasswordError(err.messsage);
            break;
        }
      });
  };
  const handleSignUp = () => {
    clearError();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.messsage);
            break;
          case "auth/weak-password":
            setPasswordError(err.messsage);
            break;
        }
      });
  };
  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("Sign out Successfull");
      })
      .catch((error) => {
        console.log("Sign out Error");
      });
  };

  const authLister = () => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authLister();
  }, []);

  return (
    <div className="App">
      <NewLogin
        user={user}
        setUser={setUser}
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignUp={handleSignUp}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
        handleLogout={handleLogout}
      />
    </div>
  );
};
export default Signup;
