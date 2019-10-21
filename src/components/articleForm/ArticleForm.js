import React from 'react';

const ArticleForm = ({ article }) => {

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(article);
    }

    return(
        <form onSubmit={(event) => {handleSubmit(event)}} >
            <fieldset>
                <fieldset className="form-group">
                    <input
                        value={article ? article.title : null} 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Article Title" 
                        />
                </fieldset>
                <fieldset className="form-group">
                    <input 
                        value={article ? article.description : null}
                        type="text"
                        className="form-control"
                        placeholder="What's this article about?"
                        />
                </fieldset>
                <fieldset className="form-group">
                    <textarea 
                        className="form-control"
                        rows="8"
                        placeholder="Write your article (in markdown)">
                            {article ? article.body : null}
                        </textarea>
                </fieldset>
                <fieldset className="form-group">
                    <input type="text" className="form-control" placeholder="Enter tags" />
                    <div className="tag-list">
                    {article ? 
                        article.tagList.map((tag, index) => {
                        return(
                            <span 
                                key={index} 
                                onClick={(e) => {console.log('clicked on feed')}} 
                                className="tag-pill tag-default">
                                {tag}
                            </span>
                        )
                    })
                    : null}
                    </div>
                </fieldset>
                <button className="btn btn-lg pull-xs-right btn-primary" type="button">
                    Publish Article
                </button>
            </fieldset>
        </form>
    );
}

export default ArticleForm;