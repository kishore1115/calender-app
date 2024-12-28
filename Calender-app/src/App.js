import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminModule from './components/AdminModule';
import UserModule from './components/UserModule';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/admin" component={AdminModule} />
                <Route path="/user" component={UserModule} />
                <Route path="/" exact component={UserModule} />
            </Switch>
        </Router>
    );
};

export default App;