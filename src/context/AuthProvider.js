import React, { createContext, useContext } from 'react';
import useAuthentication from '../hooks/useAuthentication';

const authContext = createContext();
export const useAuth = () => useContext(authContext);

const AuthProvider = ({ children }) => {
    const authFunctions = useAuthentication();

    return (
        <authContext.Provider value={authFunctions}>
            {children}
        </authContext.Provider>
    );
}

export default AuthProvider;
