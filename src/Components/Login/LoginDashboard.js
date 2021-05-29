import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { MatchMakingContext } from '../../App';
import Login from './Login';
import { initializeLoginFramework } from './LoginManager';
import Registration from './Registration';

const LoginDashboard = () => {
    const [newUserRegistration, setNewUserRegistration] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        location: '',
        field: '',
        userStatus: '',
    });
    const { userLogIn } = useContext(MatchMakingContext);   
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };     

    initializeLoginFramework();
    const handleResponse = (res, redirect) => {
        // setUser(res);
        userLogIn.setLoggedInUser(res);
        localStorage.setItem('currentuser', JSON.stringify(res));
        if (redirect) {            
            history.replace(from);
        }
    }
    return (
        <div className="login">                  
            <div className="container m-4">
                <div className="custom-control custom-checkbox mb-4">
                    <input type="checkbox" className="custom-control-input" id="newaccount" onChange={() => setNewUserRegistration(!newUserRegistration)} />
                    <label className="custom-control-label" for="newaccount">New User Registration</label>
                </div>
                <div className="row">
                    {newUserRegistration ?
                        <div className="col-lg-12 card p-3 border-warning">
                            <Registration handleResponse={handleResponse} user={user} setUser={setUser} />
                        </div>
                         : 
                        <div className="col-lg-8 card p-3 border-warning" >
                            <Login handleResponse={handleResponse} user={user} setUser={setUser} />                            
                        </div>
                     } 
                </div>
            </div>
        </div>
    );
};

export default LoginDashboard;