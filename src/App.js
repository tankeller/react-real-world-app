import React from 'react';
import './App.css';
import { Router } from '@reach/router';

import Home from './pages/Home';
import AppHeader from './components/basicLayout/AppHeader';
import AppFooter from './components/basicLayout/AppFooter';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Router>
        <Home path="/" />
      </Router>
      <AppFooter />
    </div>
  );
}

export default App;
