
// src/components/UserModule/CompanyRow.js
import React from 'react';
import { formatDistanceToNow } from 'date-fns';

const CompanyRow = ({ company }) => {
  const { name, communications, nextCommunication } = company;
  
  const lastFiveCommunications = communications.slice(-5).map((comm, index) => (
    <div key={index}>
      {comm.type} - {comm.date}
    </div>
  ));

  const timeUntilNextCommunication = formatDistanceToNow(new Date(nextCommunication), { addSuffix: true });

  return (
    <tr className="company-row">
      <td>{name}</td>
      <td>{lastFiveCommunications}</td>
      <td>{timeUntilNextCommunication}</td>
      <td>
        <button className="btn-action">View Details</button>
      </td>
    </tr>
  );
};

export default CompanyRow;
