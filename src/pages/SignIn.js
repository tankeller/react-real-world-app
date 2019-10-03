import React, { useState } from 'react';
import { Link } from '@reach/router';

import ErrorMessage from '../components/errorMessage/ErrorMessage';

const SignIn = () => {

    const [errorMessage] = useState("");

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

                        <form>
                            <fieldset className="form-group">
                                <input className="form-control form-control-lg" type="text" placeholder="Email" />
                            </fieldset>
                            <fieldset className="form-group">
                                <input className="form-control form-control-lg" type="password" placeholder="Password" />
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

export default SignIn;