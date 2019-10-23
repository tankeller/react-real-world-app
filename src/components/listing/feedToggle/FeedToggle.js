import React, { useContext } from 'react';

import AuthContext from '../../../contexts/AuthContext';

const FeedToggle = ({ feed, setFeed }) => {
    const [user] = useContext(AuthContext);

    return (
        <div className="feed-toggle">
            <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                    <button 
                        className={feed === 'global' ? "nav-link active" : "nav-link"}
                        onClick={(e) => {setFeed('global')}}>
                            Global Feed
                    </button>
                </li>
                {user.id ? 
                <li className="nav-item">
                    <button
                        className={feed === user.username ? "nav-link active" : "nav-link"}
                        onClick={() => {setFeed(user.username)}}>
                            Your Feed
                    </button>
                </li>
                :null}
            </ul>
        </div>
    )
}

export default FeedToggle;