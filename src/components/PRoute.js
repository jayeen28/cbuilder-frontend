import React from 'react';
import { useAuth } from '../context/AuthProvider';
import MainLoading from './MainLoading';
import { Navigate } from 'react-router-dom';

const PRoute = ({ children }) => {
    const { loading, user } = useAuth();
    return (
        <>
            {
                loading ?
                    <MainLoading /> :
                    <>
                        {
                            user.user_id ?
                                children :
                                <Navigate to='/login' />
                        }
                    </>
            }
        </>
    );
}

export default PRoute;
