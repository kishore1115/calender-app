// src/components/UserModule/Dashboard.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CompanyRow from './CompanyRow';

const Dashboard = () => {
  const [companies, setCompanies] = useState([]);
  
  useEffect(() => {
    // Fetch companies data (mocked for now)
    setCompanies([
      {
        id: 1,
        name: 'Company 1',
        communications: [
          { type: 'LinkedIn Post', date: '2023-09-01' },
          { type: 'Email', date: '2023-09-10' }
        ],
        nextCommunication: '2023-09-15'
      },
      {
        id: 2,
        name: 'Company 2',
        communications: [
          { type: 'Phone Call', date: '2023-09-05' },
          { type: 'LinkedIn Message', date: '2023-09-10' }
        ],
        nextCommunication: '2023-09-20'
      }
    ]);
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Last Communications</th>
            <th>Next Communication</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <CompanyRow key={company.id} company={company} />
          ))}
        </tbody>
      </table>
      <Link to="/user/communications">
        <button className="btn">Log Communication</button>
      </Link>
    </div>
  );
};

export default Dashboard;
