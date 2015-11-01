import React from 'react';
import {Router, Route} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import Shop from './components/shop';
import Cart from './components/cart';

const mainContainer = document.getElementById('main-container');

const routes = (
    <Router history={createBrowserHistory()}>
        <Route path="/" component={Shop} />
        <Route path="/cart" component={Cart} />
    </Router>
);

React.render(routes, mainContainer);
