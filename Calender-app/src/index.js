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

App.js:
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
