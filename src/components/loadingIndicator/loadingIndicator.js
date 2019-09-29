import React from 'react';

const LoadingIndicator = ({ children }) => {
    return (
        <div className="container">
            ...loading {children}
        </div>
    )
}

export default LoadingIndicator;