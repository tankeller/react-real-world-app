import React, { useState, useContext, useEffect } from 'react';

import axios from 'axios';
import AuthContext from '../contexts/AuthContext';
import LoadingIndicator from '../components/loadingIndicator/LoadingIndicator';

const Settings = () => {

    const [user] = useContext(AuthContext);
    const [profile, setProfile] = useState({});

    useEffect(() => {
        axios.get(`https://conduit.productionready.io/api/profiles/${user.username}`)
        .then((response) => {
            setProfile(response.data.profile);
        })
        .catch((error) => {console.log(error)});
    }, [user.username]);

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
                        {profile.username ? 
                            <form onSubmit={(event) => {handleSubmit(event)}} >
                                <fieldset>
                                    <fieldset className="form-group">
                                        <input 
                                            onChange={(event) => {setProfile({...profile, image: event.target.value})}}
                                            value={profile.image}
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
                        : <LoadingIndicator>Profile</LoadingIndicator>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings;