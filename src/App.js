import React, { useState } from 'react';
import './App.css';
import { Router } from '@reach/router';

import AppHeader from './components/basicLayout/AppHeader';
import AppFooter from './components/basicLayout/AppFooter';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Settings from './pages/Settings';
import Editor from './pages/Editor';
import Article from './pages/Article';
import Profile from './pages/Profile';
import AuthContext from './contexts/AuthContext';


function App() {
  const user = useState({});

  return (
    <div className="App">
      <AuthContext.Provider value={user} >
        <AppHeader />
        <Router>
          <Home path="/" />
          <SignIn path="/login" />
          <SignUp path="/register" />
          <Settings path="/settings" />
          <Editor path="/editor" />
          <Editor path="/editor/:slug" />
          <Article path="/article/:slug" />
          <Profile path="/profile/:username" />
        </Router>
        <AppFooter />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
