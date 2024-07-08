import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import UpdateProfile from './UpdateProfile';

const Router = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/updateprofile' element={<UpdateProfile />} />
        </Routes>
    );
}

export default Router;
