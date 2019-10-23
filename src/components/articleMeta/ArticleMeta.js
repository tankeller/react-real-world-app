import React from 'react';
import { Link } from '@reach/router';

const ArticleMeta = ({ article }) => {
    return (
        <div className="article-meta">
            <Link to={`/profile/${article.author.username}`}>
                <img src="http://i.imgur.com/Qr71crq.jpg" alt="Author" />
            </Link>
            <div className="info">
                <Link to={`/profile/${article.author.username}`} className="author">
                    {article.author.username}
                </Link>
                <span className="date">January 20th</span>
            </div>
            <button className="btn btn-outline-primary btn-sm pull-xs-right">
                <i className="ion-heart"></i> {article.favoritesCount}
            </button>
        </div>
    )
}

export default ArticleMeta;