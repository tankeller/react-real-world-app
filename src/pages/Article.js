import React, { useState, useEffect } from 'react';

import ArticleMeta from '../components/articleMeta/ArticleMeta';
import CommentListing from '../components/commentListing/CommentListing';
import useDataFetching from '../assets/hooks/useDataFetching';
import LoadingIndicator from '../components/loadingIndicator/LoadingIndicator';

const Article = ({ slug }) => {
    const { loadingArticle, articleData, error } = useDataFetching(`https://conduit.productionready.io/api/articles/${slug}`);

    if (loadingArticle || error) {
        return loadingArticle ? <LoadingIndicator>Article</LoadingIndicator> : error;
    }

    let { article } = articleData.article;

    return (
        <div className="article-page">
            <div className="banner">
                <div className="container">
                    <h1>How to build webapps that scale</h1>
                    <ArticleMeta article={article} />
                </div>
            </div>

            <div className="container page">
                <div className="row article-content">
                    <div className="col-md-12">
                        <p>
                        Web development technologies have evolved at an incredible clip over the past few years.
                        </p>
                        <h2 id="introducing-ionic">Introducing RealWorld.</h2>
                        <p>It's a great solution for learning how other frameworks work.</p>
                    </div>
                </div>

                <hr />

                <div className="article-actions">
                    <ArticleMeta article={article} />
                </div>

                <div className="row">
                    <div className="col-xs-12 col-md-8 offset-md-2">
                        <CommentListing slug={slug} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article;