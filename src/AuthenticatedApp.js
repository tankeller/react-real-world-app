import React from 'react';
import { Router } from '@reach/router';

import AppHeader from './components/basicLayout/AppHeader';
import AppFooter from './components/basicLayout/AppFooter';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Editor from './pages/Editor';
import Article from './pages/Article';
import Profile from './pages/Profile';

function AuthenticatedApp() {
  return (
    <>  
        <AppHeader />
        <Router>
          <Home path="/" />
          <Settings path="/settings" />
          <Editor path="/editor" />
          <Editor path="/editor/:slug" />
          <Article path="/article/:slug" />
          <Profile path="/profile/:username" />
        </Router>
        <AppFooter />
    </>
  );
}

export default AuthenticatedApp;
