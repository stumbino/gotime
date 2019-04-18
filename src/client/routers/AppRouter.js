import React from 'react';
import {Router, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import DashboardPage from '../components/DashboardPage';
import AddEventPage from '../components/AddEventPage';
import Header from '../components/Header';



export const history = createBrowserHistory();

const AppRouter = () => {
    return(
        <Router history={history}>
            <Header />
            <Route exact path="/" component={DashboardPage}/>
            <Route path="/createEvent" component={AddEventPage}/>
        </Router>
    );
};

export {AppRouter as default};