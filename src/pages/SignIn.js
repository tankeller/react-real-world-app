import React, { useState, useContext } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

import ErrorMessage from '../components/errorMessage/ErrorMessage';
import AuthContext from './../contexts/AuthContext';

const SignIn = () => {

    const [errorMessage] = useState("");

    // eslint-disable-next-line
    const [user, setUser] = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(
            "https://conduit.productionready.io/api/users/login",
            {"user": {
                "email": email, 
                "password": password
            }})
        .then((response) => {
            setUser(response.data.user);
        })
        .catch((error) => {console.log(error)})
    }

    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Sign In</h1>
                        <p className="text-xs-center">
                            <Link to="/register">Need an account?</Link>
                        </p>

                        <ErrorMessage message={errorMessage} />

                        <form onSubmit={(event) => {handleSubmit(event)}}>
                            <fieldset className="form-group">
                                <input 
                                    onChange={(event) => {setEmail(event.target.value)}}
                                    className="form-control form-control-lg"
                                    type="text"
                                    placeholder="Email" />
                            </fieldset>
                            <fieldset className="form-group">
                                <input 
                                    onChange={(event) => {setPassword(event.target.value)}}
                                    className="form-control form-control-lg"
                                    type="password"
                                    placeholder="Password" />
                            </fieldset>
                            <button className="btn btn-lg btn-primary pull-xs-right">
                                Sign in
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SignIn;