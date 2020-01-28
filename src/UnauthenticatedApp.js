import React from 'react';
import { Router } from '@reach/router';

import AppHeader from './components/basicLayout/AppHeader';
import AppFooter from './components/basicLayout/AppFooter';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Article from './pages/Article';

function UnauthenticatedApp() {
  return (
    <>
        <AppHeader />
        <Router>
          <Home path="/" />
          <SignIn path="/login" />
          <SignUp path="/register" />
          <Article path="/article/:slug" />
        </Router>
        <AppFooter />
    </>
  );
}

export default UnauthenticatedApp;
