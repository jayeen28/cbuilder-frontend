import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import UpdateProfile from './UpdateProfile';
import Register from './Register';

const Router = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/allaroundme' element={<UpdateProfile />} />
        </Routes>
    );
}

export default Router;
