import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import UpdateProfile from './UpdateProfile';

const Router = () => {
    return (
        <BrowserRouter basename='/app'>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Login />} />
                <Route path='/allaroundme' element={<UpdateProfile />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
