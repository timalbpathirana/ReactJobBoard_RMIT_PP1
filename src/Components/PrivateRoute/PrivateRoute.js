import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import jwt_decode from "jwt-decode";
import { MatchMakingContext } from '../../App';



const PrivateRoute = ({ children, ...rest }) => {
    const { userLogIn} = useContext(MatchMakingContext);
    const [loggedInUser, setLoggedInUser] = userLogIn;
    
    const isLoggedIn = () => {
        
        const token = localStorage.getItem('token');
        if(!token){
          return false;
        }
        const decodedToken = jwt_decode(token);
        // get current time
        const currentTime = new Date().getTime() / 1000;
        // compare the expiration time with the current time
        // will return false if expired and will return true if not expired
        return decodedToken.exp > currentTime;
      }
      return (
          <Route
        {...rest}
        render={({ location }) =>
          (loggedInUser.email || isLoggedIn()) ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
      );
  };

export default PrivateRoute;