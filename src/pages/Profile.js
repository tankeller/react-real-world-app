import React from 'react';

import useDataFetching from '../assets/hooks/useDataFetching';
import LoadingIndicator from '../components/loadingIndicator/LoadingIndicator';
import Listing from '../components/listing/Listing';

const Profile = ({ username }) => {
    const { loading, results, error } = useDataFetching(`https://conduit.productionready.io/api/profiles/${username}`);

    if ((loading || error)) {
        return loading ? <LoadingIndicator>Settings</LoadingIndicator> : error;
    }

    let { profile } = results;


    return(
        <div className="profile-page">
            <div className="user-info">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-10 offset-md-1">
                            <img src={profile.image} alt={profile.username} className="user-img" />
                            <h4>{profile.username}</h4>
                            <p>
                                {profile.bio}
                            </p>
                            <button className="btn btn-sm btn-outline-secondary action-btn">
                                <i className="ion-plus-round"></i>
                                &nbsp;
                                Follow {profile.username}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-10 offset-md-1">
                        <Listing datasource='https://conduit.productionready.io/api/articles'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;