import React, { useState, useEffect} from 'react';
import axios from 'axios';

import LoadingIndicator from '../../loadingIndicator/loadingIndicator';

const TagList = ({feed, setFeed}) => {

    const [tags, setTags] = useState();

    useEffect(() => {
        axios.get('https://conduit.productionready.io/api/tags')
        .then((response) => {
            setTags(response.data.tags)
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    return (
        <div className="tag-list">
            {tags ? 
            tags.map((tag, index) => {
                return(
                    <button key={index} onClick={(e) => {setFeed(tag)}} className="tag-pill tag-default">{tag}</button>
                )
            })
            : <LoadingIndicator>Tags</LoadingIndicator>}
        </div>
    )
}

export default TagList;