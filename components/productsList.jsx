import React from 'react';
const PropTypes = React.PropTypes;

const ProductsList = React.createClass({

    propTypes: {
        addProductToCartHandler: PropTypes.func.isRequired,
        products: PropTypes.array.isRequired,
        seeDetailsHandler: PropTypes.func.isRequired
    },

    _addProductToCart (productId) {
        this.props.addProductToCartHandler(productId);
    },

    _seeDetails (productId) {
        this.props.seeDetailsHandler(productId);
    },

    _getProducts () {
        return this.props.products.map(product => {
            return (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>Price: {product.price} PLN</p>
                    <button className="btn btn-default" onClick={this._addProductToCart.bind(null, product.id)}>Add to cart</button>
                    <button className="btn btn-default" onClick={this._seeDetails.bind(null, product.id)}>See details</button>
                    <hr />
                </div>
            );
        });
    },

    render () {
        return (
            <div className="ProductsList">
                {this._getProducts()}
            </div>
        );
    }
});

export default ProductsList;
