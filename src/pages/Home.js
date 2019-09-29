import React from 'react';

import Listing from '../components/listing/Listing';

const Home = () => {
    return (
        <div className="home-page">
            <div className="banner">
                <div className="container">
                    <h1 className="logo-font">conduit</h1>
                    <p>A place to share your knowledge.</p>
                </div>
            </div>

            <div className="container page">
                <div className="row">
                    <div className="col-md-9">
                        <Listing />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;