import React from 'react';
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

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Router>
        <Home path="/" />
        <SignIn path="/login" />
        <SignUp path="/register" />
        <Settings path="/settings" />
        <Editor path="/editor" />
        <Article path="/article/:article-slug" />
        <Profile path="/profile/:username" />
      </Router>
      <AppFooter />
    </div>
  );
}

export default App;
