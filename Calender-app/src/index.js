import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import rootReducer from './redux/reducers';
import './styles/index.css';
import { createRoot } from 'react-dom/client';
import process from 'process';

const store = createStore(rootReducer);
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
