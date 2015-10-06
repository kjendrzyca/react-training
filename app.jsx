import React from 'react';

const RandomClass = React.createClass({
    render () {
        return (
            <div className="RandomClass">works</div>
        );
    }
});

const mainContainer = document.getElementById('main-container');

React.render(<RandomClass />, mainContainer);
