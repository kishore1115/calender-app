import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import AdminModule from './components/AdminModule';
import UserModule from './components/UserModule';
import process from 'process';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/admin" element={<AdminModule />} />
                <Route path="/user" element={<UserModule />} />
                <Route path="/" element={<UserModule />} />
            </Routes>
        </Router>
    );
};

export default App;
