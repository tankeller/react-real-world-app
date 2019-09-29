import React from 'react';

import Listing from '../components/listing/Listing';

const Home = () => {
    return (
        <div class="home-page">
            <div class="banner">
                <div class="container">
                    <h1 class="logo-font">conduit</h1>
                    <p>A place to share your knowledge.</p>
                </div>
            </div>

            <div class="container page">
                <div class="row">
                    <div class="col-md-9">
                        <Listing />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;