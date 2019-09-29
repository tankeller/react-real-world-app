import React from 'react';
import './App.css';
import { Router } from '@reach/router';

import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
      </Router>
      
    </div>
  );
}

export default App;
