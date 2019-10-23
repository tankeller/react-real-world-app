import React from 'react';
import { Link } from '@reach/router';

const Comment = (comment ) => {
    const { author } = comment;

    return (
        <div className="card">
            <div className="card-block">
                <p className="card-text">{comment.body}</p>
            </div>
            <div className="card-footer">
                <Link to={author.username} className="comment-author">
                    <img src={author.image} className="comment-author-img" alt="user"/>
                </Link>
                &nbsp;
                <Link to={author.username} className="comment-author">{author.username}</Link>
                <span className="date-posted">{author.createdAt}</span>
                {false ?
                <span className="mod-options">
                    <i className="ion-edit"></i>
                    <i className="ion-trash-a"></i>
                </span> : null}
            </div>
        </div>
    );
}

export default ArticleComment;