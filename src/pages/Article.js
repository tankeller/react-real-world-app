import React, { useState, useContext } from 'react';
import { Link } from '@reach/router';

import ArticleMeta from '../components/articleMeta/ArticleMeta';
import AuthContext from '../contexts/AuthContext';
import useDataFetching from '../assets/hooks/useDataFetching';
import LoadingIndicator from '../components/loadingIndicator/LoadingIndicator';

const Article = ({ slug }) => {
    const { loading, results, error } = useDataFetching();

    if (loading || error) {
        return loading ? <LoadingIndicator>Article</LoadingIndicator> : error;
    }

    let { article } = results.article;

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
                        <form className="card comment-form">
                            <div className="card-block">
                                <textarea className="form-control" placeholder="Write a comment..." rows="3"></textarea>
                            </div>
                            <div className="card-footer">
                                <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
                                <button className="btn btn-sm btn-primary">
                                Post Comment
                                </button>
                            </div>
                        </form>
                        
                        <div className="card">
                            <div className="card-block">
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            <div className="card-footer">
                                <a href="" className="comment-author">
                                <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
                                </a>
                                &nbsp;
                                <a href="" className="comment-author">Jacob Schmidt</a>
                                <span className="date-posted">Dec 29th</span>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-block">
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            <div className="card-footer">
                                <a href="" className="comment-author">
                                <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
                                </a>
                                &nbsp;
                                <a href="" className="comment-author">Jacob Schmidt</a>
                                <span className="date-posted">Dec 29th</span>
                                <span className="mod-options">
                                <i className="ion-edit"></i>
                                <i className="ion-trash-a"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article;