import React, { useState, useContext } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

import ErrorMessage from '../components/errorMessage/ErrorMessage';
import AuthContext from '../contexts/AuthContext';

const SignUp = () => {

    // eslint-disable-next-line
    const [user, setUser] = useContext(AuthContext);
    const [errorMessage] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://conduit.productionready.io/api/users/',
        {'user': {
            'username': username,
            'email': email,
            'password': password
        }})
        .then((response) => {
            setUser(response.data.user)
        })
        .catch((error) => {console.log(error)})
    }

    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        
                        <h1 className="text-xs-center">Sign Up</h1>
                        <p className="text-xs-center">
                            <Link to="/login">Have an account?</Link>
                        </p>

                        <ErrorMessage message={errorMessage} />                        

                        <form onSubmit={(event) => {handleSubmit(event)}} >
                            <fieldset className="form-group">
                                <input 
                                    onChange={(e) => {setUsername(e.target.value)}}
                                    className="form-control form-control-lg" 
                                    type="text" 
                                    placeholder="Your Name" />
                            </fieldset>
                            <fieldset className="form-group">
                                <input 
                                    onChange={(e) => {setEmail(e.target.value)}}
                                    className="form-control form-control-lg"
                                    type="text"
                                    placeholder="Email" />
                            </fieldset>
                            <fieldset className="form-group">
                                <input 
                                    onChange={(e) => {setPassword(e.target.value)}}
                                    className="form-control form-control-lg"
                                    type="password"
                                    placeholder="Password" />
                            </fieldset>
                            <button className="btn btn-lg btn-primary pull-xs-right">
                                Sign up
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SignUp;