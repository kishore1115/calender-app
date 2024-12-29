import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCompany } from '../redux/actions';

const AdminModule = () => {
    const dispatch = useDispatch();
    const [company, setCompany] = useState({ name: '', location: '', linkedIn: '', emails: '', phoneNumbers: '', comments: '', periodicity: '' });

    const handleChange = (e) => {
        setCompany({ ...company, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addCompany(company));
        setCompany({ name: '', location: '', linkedIn: '', emails: '', phoneNumbers: '', comments: '', periodicity: '' });
    };

    return (
        <div>
            <h1>Admin Module</h1>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Company Name" value={company.name} onChange={handleChange} required />
                <input name="location" placeholder="Location" value={company.location} onChange={handleChange} />
                <input name="linkedIn" placeholder="LinkedIn Profile" value={company.linkedIn} onChange={handleChange} />
                <input name="emails" placeholder="Emails" value={company.emails} onChange={handleChange} />
                <input name="phoneNumbers" placeholder="Phone Numbers" value={company.phoneNumbers} onChange={ handleChange} />
                <textarea name="comments" placeholder="Comments" value={company.comments} onChange={handleChange} />
                <input name="periodicity" placeholder="Communication Periodicity" value={company.periodicity} onChange={handleChange} />
                <button type="submit">Add Company</button>
            </form>
        </div>
    );
};

export default AdminModule;
