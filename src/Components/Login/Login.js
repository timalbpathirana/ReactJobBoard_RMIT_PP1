import React, { useState } from 'react';
import { handleForgetPassword, handleGoogleSignIn, signInWithEmailAndPassword } from './LoginManager';
import googleimage from "../../Images/Login/google-icon.png";
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


const Login = (props) => {
    const [forgetPassword, setForgetPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...props.user };
            newUserInfo[e.target.name] = e.target.value;
            props.setUser(newUserInfo);
        }
    }

    const handleSubmit = (e) => {
        if (!forgetPassword && props.user.email && props.user.password) {
            signInWithEmailAndPassword(props.user.email, props.user.password)
                .then(res => {
                    props.handleResponse(res, true);
                })
        }
        else if (forgetPassword && props.user.email) {
            handleForgetPassword(props.user.email)
        }
        e.preventDefault();
    }

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                props.handleResponse(res, true);
            })
    }
    return (
        <div>
            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <label>E-mail / Username</label>
                            <input className="form-control" type="text" name="email" placeholder="E-mail / Username" onBlur={handleBlur} />
                        </div>
                        {!forgetPassword &&
                            <div className="col-md-6">
                                <label>Password</label>
                                <div className="input-group">
                                    <input className="form-control" type={!showPassword ? "password" : "text"} name="password" placeholder="Password" onBlur={handleBlur} /><div className="input-group-text"><span onClick={() => setShowPassword(!showPassword)}><FontAwesomeIcon icon={!showPassword ? faEyeSlash : faEye} /></span></div>
                                </div>
                            </div>}
                        <div className="col-md-12">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" onChange={() => setForgetPassword(!forgetPassword)} className="custom-control-input" id="forgetpassword" />
                                <label className="custom-control-label" for="forgetpassword">Forget Password</label>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <button className="btn mt-4 border-dark text-danger">Submit</button>
                        </div>
                    </div>
                </form>
                <button onClick={googleSignIn} className="btn mt-4 border-dark text-info"><img src={googleimage} style={{ width: 20, height: 20 }} alt="" />Continue with Google</button>
            </div>
        </div>
    );
};
export default Login;