import React, { useState} from 'react'
import AuthContext from './AuthContext';

function AppProviders({children}) {
  const user = useState({});

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  )
}
export default AppProviders