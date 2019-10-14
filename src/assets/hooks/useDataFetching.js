import React, { useState, useEffect } from "react";
import axios from "axios";

function useDataFetching(dataSource) {
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get(dataSource)
        .then((response) => {
            setResults(response.data);
            setLoading(false);
        })
        .catch((error) => {
            setLoading(false);
            setError(error);
        });
    },[dataSource])

    return {
        loading,
        results,
        error
    };
}

export default useDataFetching;