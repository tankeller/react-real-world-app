import React from 'react';

const ErrorMessage = ({ message }) => {

    if (message === "") {
        return null;
    }

    return (
        <ul className="error-messages">
            <li>{ message }</li>
        </ul>
    )
}

export default ErrorMessage;