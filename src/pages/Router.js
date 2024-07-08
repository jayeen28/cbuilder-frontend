import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import UpdateProfile from './UpdateProfile';
import PRoute from '../components/PRoute';

const Router = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/updateprofile' element={<PRoute><UpdateProfile /></PRoute>} />
        </Routes>
    );
}

export default Router;
