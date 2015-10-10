import React from 'react';
const PropTypes = React.PropTypes;

const Product = React.createClass({

    propTypes: {
        addProductToCartHandler: PropTypes.func.isRequired,
        details: PropTypes.object.isRequired,
        goBackToProductsListHandler: PropTypes.func.isRequired
    },

    _goBackToProductsList () {
        this.props.goBackToProductsListHandler();
    },

    _addProductToCart (productId) {
        this.props.addProductToCartHandler(productId);
    },

    render () {
        const productDetails = this.props.details;
        return (
            <div className="Product">
                <h2>{productDetails.name} (id:{productDetails.id})</h2>
                <p>Description:</p>
                <p>{productDetails.description}</p>
                <p>Price: {productDetails.price} PLN</p>
                <button className="btn btn-default" onClick={this._addProductToCart.bind(null, productDetails.id)}>Add to cart</button>
                <button className="btn btn-default" onClick={this._goBackToProductsList}>Go back</button>
            </div>
        );
    }

});

export default Product;
