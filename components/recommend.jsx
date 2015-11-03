import React from 'react';

const Recommend = React.createClass({
    render () {
        return (
            <div className="Recommend">
                Thanks for recommending {this.props.params.name}!
            </div>
        );
    }
});

export default Recommend;
