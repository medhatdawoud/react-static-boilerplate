import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/layout/layout';
import HomePage from './containers/home';
import AboutPage from './containers/about';
import LoginPage from './containers/login/login.component';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
        <Route path="login" component={LoginPage} />
    </Route>
);