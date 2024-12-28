import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCommunication } from '../redux/actions';

const CommunicationModal = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const [communication, setCommunication] = useState({ type: '', date: '', notes: '' });

    const handleChange = (e) => {
        setCommunication({ ...communication, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addCommunication(communication));
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal">
            <h2>Log Communication</h2>
            <form onSubmit={handleSubmit}>
                <input name="type" placeholder="Type of Communication" value={communication.type} onChange={handleChange} required />
                <input type="date" name="date" value={communication.date} onChange={handleChange} required />
                <textarea name="notes" placeholder="Notes" value={communication.notes} onChange={handleChange} />
                <button type="submit">Log Communication</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default CommunicationModal;