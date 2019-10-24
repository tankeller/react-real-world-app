import React from 'react';
import { Link } from '@reach/router';

const ArticlePreview = ({ article }) => {

    const { author } = article; 

    return (
        <div className="article-preview">
            <div className="article-meta">
                <Link to={`/profile/${author.username}`}>
                    <img src={author.image} alt="Author" />
                </Link>
                <div className="info">
                    <Link to={`/profile/${author.username}`} className="author">
                        {author.username}
                    </Link>
                    <span className="date">January 20th</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                    <i className="ion-heart"></i> {article.favoritesCount}
                </button>
            </div>
            <Link to={`/article/${article.slug}`} className="preview-link">
                <h1>{article.title}</h1>
                <p>{article.description}</p>
                <span>Read more...</span>
            </Link>
        </div>
    )
}

export default ArticlePreview;