import React, { useContext } from 'react';
import './App.css';

import AuthContext from './contexts/AuthContext';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';

const App = () => {
  const [user] = useContext(AuthContext);

  return (
    <div className="App">
      {user.id ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
