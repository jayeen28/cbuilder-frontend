import React from 'react';
import { Toaster } from './components/Toaster';
import AuthProvider from './context/AuthProvider';
import Router from './pages/Router';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <BrowserRouter basename='/app'>
                <AuthProvider>
                    <Router />
                    <Toaster />
                </AuthProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
