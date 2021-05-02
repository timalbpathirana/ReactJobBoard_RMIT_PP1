import { Input } from "@material-ui/core";
import React from "react";
import "./Login.css";
import Dashboard from "../Dashboard/Dashboard";

const NewLogin = (props) => {
  const {
    user,
    setUser,
    email,
    password,
    setEmail,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    handleLogout,
  } = props;

  return (
    <section className="login">
      {user ? (
        <div>
          <Dashboard handleLogout={handleLogout} />
        </div>
      ) : (
        <div className="loginContainer">
          <label>Username</label>
          <Input
            type="text"
            autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="errorMsg">{emailError}</p>

          <label>Password</label>
          <Input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="errorMsg">{passwordError}</p>
          <div className="btnContainer">
            {hasAccount ? (
              <>
                <button onClick={handleLogin}>Sign In</button>
                <p>
                  Dont have an account ?
                  <span onClick={() => props.setHasAccount(!hasAccount)}>
                    Sign Up
                  </span>
                </p>
              </>
            ) : (
              <>
                <button onClick={handleSignUp}>Sign Up</button>
                <p>
                  Have an account?
                  <span onClick={() => setHasAccount(!hasAccount)}>
                    Sign In
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default NewLogin;
