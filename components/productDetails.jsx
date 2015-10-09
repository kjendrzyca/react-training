import React from 'react';
const PropTypes = React.PropTypes;

const Product = React.createClass({

    propTypes: {
        details: PropTypes.object.isRequired,
        goBackHandler: PropTypes.func.isRequired
    },

    _goBack () {
        this.props.goBackHandler();
    },

    render () {
        const productDetails = this.props.details;
        return (
            <div className="Product">
                <h2>{productDetails.name} (id:{productDetails.id})</h2>
                <p>Description:</p>
                <p>{productDetails.description}</p>
                <p>Price: {productDetails.price} PLN</p>
                <button className="btn btn-default" onClick={this._goBack}>Go back</button>
            </div>
        );
    }

});

export default Product;
