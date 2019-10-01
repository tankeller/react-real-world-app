import React from 'react';

const ErrorMessage = ({ message }) => {
    return (
        <ul className="error-messages">
            <li>{ message }</li>
        </ul>
    )
}

export default ErrorMessage;