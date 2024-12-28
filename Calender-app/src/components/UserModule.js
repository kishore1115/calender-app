import React from 'react';
import { useSelector } from 'react-redux';
import Dashboard from './Dashboard';

const UserModule = () => {
    const companies = useSelector((state) => state.companies);

    return (
        <div>
            <h1>User Module</h1>
            <Dashboard companies={companies} />
        </div>
    );
};

export default UserModule;