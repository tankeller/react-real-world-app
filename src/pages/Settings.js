import React, { useContext } from 'react';
import { navigate } from '@reach/router';

import AuthContext from '../contexts/AuthContext';
import LoadingIndicator from '../components/loadingIndicator/LoadingIndicator';
import useDataFetching from '../assets/hooks/useDataFetching';
import axios from 'axios';

const Settings = () => {
    const [user, setUser] = useContext(AuthContext);
    const { loading, results, error } = useDataFetching(`https://conduit.productionready.io/api/profiles/${user.username}`);

    if ((loading || error)) {
        return loading ? <LoadingIndicator>Settings</LoadingIndicator> : error;
    }

    console.log('loading it all')

    let { profile } = results;

    function handleSubmit(event) {
        event.preventDefault();
        axios.defaults.headers.common['Authorization'] = `Token ${user.token}`;
        axios.put('https://conduit.productionready.io/api/user',{
            user:{...profile}
        });
    }

    function handleLogout(event) {
        event.preventDefault();
        setUser({});
        navigate("/login");
    }

    return(
        <div className="settings-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Your Settings</h1>
                            <form onSubmit={(event) => {handleSubmit(event)}} >
                                <fieldset>
                                    <fieldset className="form-group">
                                        <input 
                                            onChange={(event) => {profile = {...profile, image: event.target.value}}}
                                            value={profile.image}
                                            className="form-control"
                                            type="text"
                                            placeholder="URL of profile picture" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <input 
                                            onChange={(event) => {profile = {...profile, username: event.target.value}}}
                                            value={profile.username}
                                            className="form-control form-control-lg"
                                            type="text"
                                            placeholder="Your Name" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <textarea 
                                            onChange={(event) => {profile = {...profile, bio: event.target.value}}}
                                            className="form-control form-control-lg"
                                            rows="8"
                                            placeholder="Short bio about you">
                                                {profile.bio}
                                            </textarea>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <input 
                                            onChange={(event) => {profile ={...profile, email: event.target.value}}}
                                            value={user.email}
                                            className="form-control form-control-lg"
                                            type="text"
                                            placeholder="Email" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <input 
                                            onChange={(event) => {profile = {...profile, password: event.target.value}}}
                                            className="form-control form-control-lg"
                                            type="password"
                                            placeholder="Password" />
                                    </fieldset>
                                    <button className="btn btn-lg btn-primary pull-xs-right">
                                        Update Settings
                                    </button>
                                </fieldset>
                            </form>
                    </div>
                </div>
                <hr />
                <button className="btn btn-outline-danger" type="button" onClick={handleLogout} >
                    Or click here to logout.
                </button>
            </div>
        </div>
    )
}

export default Settings;