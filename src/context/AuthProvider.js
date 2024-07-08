import React, { createContext, useContext } from 'react';
import useAuthentication from '../hooks/useAuthentication';
import MainLoading from '../components/MainLoading';

const authContext = createContext();
export const useAuth = () => useContext(authContext);

const AuthProvider = ({ children }) => {
    const authFunctions = useAuthentication();

    return (
        <>
            {
                authFunctions.loading ? <MainLoading /> : <></>
            }
            <authContext.Provider value={authFunctions}>
                {children}
            </authContext.Provider>
        </>
    );
}

export default AuthProvider;
