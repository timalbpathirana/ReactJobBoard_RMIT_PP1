import "./App.css";
import Header from "./Components/Home/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { createContext, useState } from "react";
import LoginDashboard from "./Components/Login/LoginDashboard";
import Home from "./Components/Home/Home";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./Components/Home/theme/theme";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Dashboard from "./Components/Dashboard/Dashboard";
import AdminDashboard from "./Components/Dashboard/Admin/AdminDashboard";

export const MatchMakingContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [users, setUsers] = useState([]);
  const [isUpdated, setIsUpdated] = useState([Math.random()]);

  return (
    <MatchMakingContext.Provider
      value={{
        userLogIn: [loggedInUser, setLoggedInUser],
        update: [isUpdated, setIsUpdated],
        signupUsers: [users, setUsers],
      }}
    >
      <Router>
        <ThemeProvider theme={theme}>
          <Header />
          <Switch>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/adminDashboard">
              <AdminDashboard />
            </PrivateRoute>
            <Route path="/login">
              <LoginDashboard />
            </Route>

            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </ThemeProvider>
      </Router>
    </MatchMakingContext.Provider>
  );
}

export default App;
