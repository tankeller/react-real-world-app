import React, { useContext} from 'react';
import { Link } from '@reach/router';

import AuthContext from './../../contexts/AuthContext';



const AppHeader = () => {

    const [user] = useContext(AuthContext);

    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <Link className="navbar-brand" to="/">conduit</Link>
                <ul className="nav navbar-nav pull-xs-right">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    {user.id ? 
                        <li className="nav-item">
                            <Link className="nav-link" to="/editor">
                                <i className="ion-compose"></i>&nbsp;New Post
                            </Link>
                        </li>
                    : null }
                    {user.id ?
                        <li className="nav-item">
                            <Link className="nav-link" to="/settings">
                            <i className="ion-gear-a"></i>&nbsp;Settings
                            </Link>
                        </li> 
                    : null }
                    {user.id ?
                        <li className="nav-item">
                            <Link className="nav-link" to={`/profile/${user.username}`}>{user.username}</Link>
                        </li>
                    : null }
                    {user.id === undefined ?
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Sign in</Link>
                        </li> 
                    : null}
                    {user.id === undefined ?
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Sign up</Link>
                        </li>
                    : null }
                </ul>
            </div>
        </nav>
    )
}

export default AppHeader;