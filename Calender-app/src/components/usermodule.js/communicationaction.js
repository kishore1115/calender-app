// src/components/UserModule/CommunicationActions.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CommunicationActions = ({ companyName, onSave }) => {
  const [communicationType, setCommunicationType] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');

  const handleSave = () => {
    if (!communicationType || !date || !notes) {
      setError('Please fill in all fields.');
      return;
    }

    onSave({ communicationType, date, notes });
    setError('');
  };

  return (
    <div className="communication-actions-container">
      <h2>Log Communication for {companyName}</h2>
      {error && <div className="error-message">{error}</div>}
      <div className="form-group">
        <label>Communication Type:</label>
        <select onChange={(e) => setCommunicationType(e.target.value)}>
          <option value="">Select Communication Type</option>
          <option value="LinkedIn Post">LinkedIn Post</option>
          <option value="Email">Email</option>
          <option value="Phone Call">Phone Call</option>
        </select>
      </div>
      <div className="form-group">
        <label>Date:</label>
        <input type="date" onChange={(e) => setDate(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Notes:</label>
        <textarea onChange={(e) => setNotes(e.target.value)} placeholder="Add your notes..." />
      </div>
      <button className="btn" onClick={handleSave}>
        Save Communication
      </button>
    </div>
  );
};

CommunicationActions.propTypes = {
  companyName: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired
};

export default CommunicationActions;
