import React from 'react';
import { Link } from '@reach/router';

const AppHeader = () => {
    return (
        <nav class="navbar navbar-light">
            <div class="container">
                <Link class="navbar-brand" to="/">conduit</Link>
                <ul class="nav navbar-nav pull-xs-right">
                <li class="nav-item">
                    <Link class="nav-link active" to="/">Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/editor">
                        <i class="ion-compose"></i>&nbsp;New Post
                    </Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/settings">
                    <i class="ion-gear-a"></i>&nbsp;Settings
                    </Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/login">Sign in</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/register">Sign up</Link>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default AppHeader;