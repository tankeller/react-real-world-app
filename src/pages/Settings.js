import React, { useState, useContext, useEffect } from 'react';

import AuthContext from '../contexts/AuthContext';
import LoadingIndicator from '../components/loadingIndicator/LoadingIndicator';
import useDataFetching from '../assets/hooks/useDataFetching';

const Settings = () => {
    const [user] = useContext(AuthContext);
    const [profile, setProfile] = useState({});
    const { loading, results, error } = useDataFetching(`https://conduit.productionready.io/api/profiles/${user.username}`);

    if (loading || error) {
        return loading ? <LoadingIndicator>Settings</LoadingIndicator> : error;
    }

    //setProfile(results.profile);

    function handleSubmit(event) {
        event.preventDefault();

        console.log(profile);
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
                                            onChange={(event) => {setProfile({...profile, image: event.target.value})}}
                                            value={results.profile.image}
                                            className="form-control"
                                            type="text"
                                            placeholder="URL of profile picture" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <input 
                                            onChange={(event) => {setProfile({...profile, username: event.target.value})}}
                                            value={profile.username}
                                            className="form-control form-control-lg"
                                            type="text"
                                            placeholder="Your Name" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <textarea 
                                            onChange={(event) => {setProfile({...profile, bio: event.target.value})}}
                                            className="form-control form-control-lg"
                                            rows="8"
                                            placeholder="Short bio about you">
                                                {profile.bio}
                                            </textarea>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <input 
                                            onChange={(event) => {setProfile({...profile, email: event.target.value})}}
                                            value={user.email}
                                            className="form-control form-control-lg"
                                            type="text"
                                            placeholder="Email" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <input 
                                            onChange={(event) => {setProfile({...profile, password: event.target.value})}}
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
            </div>
        </div>
    )
}

export default Settings;