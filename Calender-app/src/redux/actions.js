// /src/redux/actions.js

// Action Types
export const ADD_COMPANY = 'ADD_COMPANY';
export const ADD_COMMUNICATION_METHOD = 'ADD_COMMUNICATION_METHOD';
export const ADD_COMMUNICATION = 'ADD_COMMUNICATION';

// Action Creators
export const addCompany = (company) => ({
    type: ADD_COMPANY,
    payload: company,
});

export const addCommunicationMethod = (method) => ({
    type: ADD_COMMUNICATION_METHOD,
    payload: method,
});

export const addCommunication = (communication) => ({
    type: ADD_COMMUNICATION,
    payload: communication,
});