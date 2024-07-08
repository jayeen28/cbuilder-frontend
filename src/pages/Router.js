import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import UpdateProfile from './UpdateProfile';
import PRoute from '../components/PRoute';
import Profiles from './Profiles';
import ManageProfiles from './ManageProfiles';
import AllAroundMe from './AllAroundMe';

const Router = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/updateprofile' element={<PRoute><UpdateProfile /></PRoute>} />
            <Route path='/profiles' element={<PRoute><Profiles /></PRoute>} />
            <Route path='/manageprofiles' element={<PRoute><ManageProfiles /></PRoute>} />
            <Route path='/allaroundme' element={<PRoute><AllAroundMe /></PRoute>} />
        </Routes>
    );
}

export default Router;
