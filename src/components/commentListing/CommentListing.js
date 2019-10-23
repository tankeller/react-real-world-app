import React from 'react';

import Comment from '../commentListing/comment/Comment';
import useDataFetching from '../../assets/hooks/useDataFetching';
import LoadingIndicator from '../loadingIndicator/LoadingIndicator';


const CommentListing = ({ slug }) => {
    const { loading, results , error } = useDataFetching(`https://conduit.productionready.io/api/articles/${slug}/comments`);

    if (loading || error) {
        return loading ? <LoadingIndicator>Comments</LoadingIndicator> : error;
    }

    return (
        <>
            <form className="card comment-form">
                <div className="card-block">
                    <textarea className="form-control" placeholder="Write a comment..." rows="3"></textarea>
                </div>
                <div className="card-footer">
                    <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" alt="user" />
                    <button className="btn btn-sm btn-primary">
                    Post Comment
                    </button>
                </div>
            </form>

            {results.comments.map((comment, index) => {
            return <Comment key={index} comment={comment} />
            })}
        </>
    )
}

export default CommentListing;