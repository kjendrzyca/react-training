import React from 'react';
import {Router, Route} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import Shop from './components/shop';
import Cart from './components/cart';
import Recommend from './components/recommend';

const mainContainer = document.getElementById('main-container');

const routes = (
    <Router history={createBrowserHistory()}>
        <Route component={Shop} path="/" />
        <Route component={Cart} path="/cart"  />
        <Route component={Recommend} path="/recommend/:name" />
    </Router>
);

React.render(routes, mainContainer);
