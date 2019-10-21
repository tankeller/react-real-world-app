import React from 'react';

import EditArticle from '../components/editArticle/EditArticle';
import ArticleForm from '../components/articleForm/ArticleForm';

const Editor = ({ slug }) => {
    return (
        <div className="editor-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-10 offset-md-1 col-xs-12">
                        {slug ? 
                            <EditArticle slug={slug} /> 
                            : <ArticleForm  />
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Editor;