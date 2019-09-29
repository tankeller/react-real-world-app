import React from 'react';
import './App.css';
import { Router } from '@reach/router';

import AppHeader from './components/basicLayout/AppHeader';
import AppFooter from './components/basicLayout/AppFooter';
import Home from './pages/Home';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Router>
        <Home path="/" />
        <SignIn path="login" />
      </Router>
      <AppFooter />
    </div>
  );
}

export default App;
