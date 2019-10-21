import React from 'react';

import useDataFetching from '../../assets/hooks/useDataFetching';
import LoadingIndicator from '../loadingIndicator/LoadingIndicator';
import ArticleForm from '../articleForm/ArticleForm';

const EditArticle = ({ slug }) => {

    const {loading, results, error} = useDataFetching(`https://conduit.productionready.io/api/articles/${slug}`);

    if (loading || error) {
        return loading ? <LoadingIndicator>Article</LoadingIndicator> : error;
    }

    let { article } = results;

    return (
        <ArticleForm article={article} />
    );
}

export default EditArticle;