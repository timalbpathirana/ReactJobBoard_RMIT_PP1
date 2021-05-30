import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from './LoginManager';

const Registration = (props) => {
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

    const handleChange = (e) => {
        const newUserInfo = { ...props.user };
        newUserInfo[e.target.name] = e.target.value;
        props.setUser(newUserInfo);
    }

    const handleSubmit = (e) => {
        if (props.user.email && props.user.password) {
            createUserWithEmailAndPassword(props.user.firstName, props.user.lastName, props.user.email, props.user.password, props.user.location, props.user.field, props.user.userStatus)
                .then(res => {
                    props.handleResponse(res, true);
                    alert('Welcome to Match-Making, for New User Please SignIn after registration');

                })
        }
        e.preventDefault();
    }


    return (
        <div>
            <div className="register-form">
                <form className="register-form" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-3">
                            <label>First Name</label>
                            <input className="form-control" type="text" id="firstName" name="firstName" placeholder="First Name" onBlur={handleBlur} required />
                            <div className="invalid-feedback">Please Fill a valid first name</div>
                        </div>
                        <div className="col-md-3">
                            <label>Last Name</label>
                            <input className="form-control" type="text" name="lastName" placeholder="Last Name" onBlur={handleBlur} required />
                            <div className="invalid-feedback">Please Fill a valid last name</div>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="usersLocation">Location</label>
                            <select className="form-control" id="usersLocation" name="location" onBlur={handleBlur} required>
                                <option selected disabled value="" >Choose...</option>
                                <option>Melbourne</option>
                                <option>Sydney</option>
                                <option>Brisbane</option>
                            </select>
                            <div className="invalid-feedback">Please select anyone in these field</div>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="usersMenuField">Speciality in Field</label>
                            <select className="form-control" id="usersMenuField" name="field" onBlur={handleBlur} required>
                                <option selected disabled value="">Choose...</option>
                                <option>Plumber</option>
                                <option>Electrician</option>
                                <option>Home inspector</option>
                                <option>Boilermaker</option>
                                <option>Landscape Designer</option>
                                <option>Others</option>
                            </select>
                            <div className="invalid-feedback">Please select anyone in these field</div>
                        </div>
                        <div className="col-md-4 my-3">
                            <label>E-mail</label>
                            <input className="form-control" type="text" name="email" id="email" placeholder="E-mail" onBlur={handleBlur} required />
                            <div className="invalid-feedback">Please Fill a valid email</div>
                        </div>

                        <div className="col-md-3 my-3">
                            <label>Password</label>
                            <div className="input-group">
                                <input className="form-control" type={!showPassword ? "password" : "text"} placeholder="Password" />
                                <div className="input-group-text"><span onClick={() => setShowPassword(!showPassword)}><FontAwesomeIcon icon={!showPassword ? faEyeSlash : faEye} /></span></div>
                                <div className="invalid-feedback">Please Fill a valid password</div>
                            </div>
                        </div>
                        <div className="col-md-3 my-3">
                            <label>Retype Password</label>
                            <div className="input-group">
                                <input className="form-control" type={!showPassword ? "password" : "text"} name="password" placeholder="Password" onBlur={handleBlur} required />
                                <div className="input-group-text"><span onClick={() => setShowPassword(!showPassword)}><FontAwesomeIcon icon={!showPassword ? faEyeSlash : faEye} /></span></div>
                                <div className="invalid-feedback">Please Fill a valid password</div>
                            </div>
                        </div>
                        <div className="col-md-10 my-3">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="userStatus" id="contrator" onChange={handleChange} value="Contractor" required />
                                <label className="form-check-label" htmlFor="userStatus">
                                    Contractor
                                </label>
                                <div className="invalid-feedback">Please select anyone</div>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="userStatus" id="contratee" onChange={handleChange} value="Contractee" required />
                                <label className="form-check-label" htmlFor="userStatus">
                                    Contractee
                                </label>
                                <div className="invalid-feedback">Please select anyone</div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <button className="btn mt-4 border-dark text-danger">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default Registration;