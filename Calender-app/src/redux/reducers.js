import { ADD_COMPANY, ADD_COMMUNICATION_METHOD, ADD_COMMUNICATION } from './actions';

const initialState = {
    companies: [],
    communications: [],
    communicationMethods: [
        { name: 'LinkedIn Post', description: 'Post on LinkedIn', sequence: 1, mandatory: true },
        { name: 'LinkedIn Message', description: 'Message on LinkedIn', sequence: 2, mandatory: true },
        { name: 'Email', description: 'Send an email', sequence: 3, mandatory: true },
        { name: 'Phone Call', description: 'Call the company', sequence: 4, mandatory: false },
        { name: 'Other', description: 'Other methods', sequence: 5, mandatory: false },
    ],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMPANY:
            return { ...state, companies: [...state.companies, action.payload] };
        case ADD_COMMUNICATION_METHOD:
            return { ...state, communicationMethods: [...state.communicationMethods, action.payload] };
        case ADD_COMMUNICATION:
            return { ...state, communications: [...state.communications, action.payload] };
        default:
            return state;
    }
};

export default rootReducer;