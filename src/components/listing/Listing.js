import React, { useState, useEffect } from 'react';
import axios from 'axios';

import FeedContext from '../../contexts/FeedContext'
import FeedToggle from './feedToggle/FeedToggle';
import ArticlePreview from './articlePreview/ArticlePreview';
import LoadingIndicator from '../loadingIndicator/loadingIndicator'

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
        <div>

                <FeedToggle feed={feed} setFeed={setFeed} />

            {articles ? articles.map((article, index) => {
                return (
                    <ArticlePreview key={index} article={article} />
                )
            }) :
            <LoadingIndicator> Articles </LoadingIndicator>}
        </div>
    )
}

export default Listing;