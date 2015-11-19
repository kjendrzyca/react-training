import React from 'react';

const mainContainer = document.getElementById('main-container');

const routes = (
    <Router history={createBrowserHistory()}>
        <Route component={Shop} path="/" />
        <Route component={Cart} path="/cart"  />
        <Route component={Recommend} path="/recommend/:name" />
    </Router>
);

React.render(routes, mainContainer);
