import React from 'react';

const Product = React.createClass({
    render () {
        return (
            <div className="Product">
                {this.props}
            </div>
        );
    }
});

export default Product;
