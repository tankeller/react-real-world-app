import React from 'react';

const FeedToggle = ({ feed, setFeed }) => {

    //const [feed, setFeed] = useContext(FeedContext)

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
                <li className="nav-item">
                    <button
                        className={feed === 'local' ? "nav-link active" : "nav-link"}
                        onClick={(e) => {setFeed('local')}}>
                            Your Feed
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default FeedToggle;