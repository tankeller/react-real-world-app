import React, { useState, useEffect } from 'react';
import axios from 'axios';

import FeedToggle from './feedToggle/FeedToggle';
import ArticlePreview from './articlePreview/ArticlePreview';
import LoadingIndicator from '../loadingIndicator/loadingIndicator';
import TagList from './taglist/TagList';

const Listing = () => {
    const [feed, setFeed] = useState("global");
    const [articles, setArticles] = useState();

    useEffect(() => {
        axios.get('https://conduit.productionready.io/api/articles')
        .then(function (response) {
            setArticles(response.data.articles);
        })
        .catch(function (error) {
            console.log(error);
        })
    }, [feed])

    return (
        <div className="row">
            <div className="col-md-9">
                <FeedToggle feed={feed} setFeed={setFeed} />

                {articles ? articles.map((article, index) => {
                    return (
                        <ArticlePreview key={index} article={article} />
                    )
                }) :
                <LoadingIndicator> Articles </LoadingIndicator>}
            </div>
            <div className="col-md-3">
                <div className="sidebar">
                    <p>Popular Tags</p>
                    <TagList feed={feed} setFeed={setFeed} />
                </div>
            </div>
        </div>
    )
}

export default Listing;