import React, { useState } from 'react';

import FeedToggle from './feedToggle/FeedToggle';
import ArticlePreview from './articlePreview/ArticlePreview';
import LoadingIndicator from '../loadingIndicator/LoadingIndicator';
import TagList from './taglist/TagList';
import useDataFetching from '../../assets/hooks/useDataFetching';

const Listing = ({datasource}) => {
    const [feed, setFeed] = useState('global');

    if (feed !== 'global') {
        datasource = `${datasource}?author=${feed}`;
    }

    const {loading, results, error } = useDataFetching(datasource);
    
    if ((loading || error)) {
        return loading ? <LoadingIndicator>Settings</LoadingIndicator> : error;
    }

    let { articles } = results;

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