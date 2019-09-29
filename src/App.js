import React from 'react';
import './App.css';
import { Router } from '@reach/router';

import AppHeader from './components/basicLayout/AppHeader';
import AppFooter from './components/basicLayout/AppFooter';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Router>
        <Home path="/" />
        <SignIn path="/login" />
        <SignUp path="/register" />
      </Router>
      <AppFooter />
    </div>
  );
}

export default App;
