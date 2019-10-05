import { createContext } from 'react';

const user = {};

const AuthContext = createContext([user, () => {}]);

export default AuthContext;