import React from 'react';

import ArticleMeta from '../components/articleMeta/ArticleMeta';
import CommentListing from '../components/commentListing/CommentListing';
import useDataFetching from '../assets/hooks/useDataFetching';
import LoadingIndicator from '../components/loadingIndicator/LoadingIndicator';

const Article = ({ slug }) => {
    const { loading, results, error } = useDataFetching(`https://conduit.productionready.io/api/articles/${slug}`);

    if (loading || error) {
        return loading ? <LoadingIndicator>Article</LoadingIndicator> : error;
    }

    let { article } = results;

    return (
        <div className="article-page">
            <div className="banner">
                <div className="container">
                    <h1>{article.title}</h1>
                    <ArticleMeta article={article} />
                </div>
            </div>

            <div className="container page">
                <div className="row article-content">
                    <div className="col-md-12">
                        {article.body}
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