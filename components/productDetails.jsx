import React from 'react';
import ProductsApi from '../productsApi';

const PropTypes = React.PropTypes;

const ProductDetails = React.createClass({

    propTypes: {
        addProductToCartHandler: PropTypes.func.isRequired,
        goBackToProductsListHandler: PropTypes.func.isRequired,
        productId: PropTypes.number.isRequired
    },

    getInitialState () {
        return {
            product: null
        };
    },

    componentDidMount () {
        ProductsApi.getById(this.props.productId, (error, product) => {
            if (error) {
                alert(error);
                return;
            }

            this.setState({product: product});
        });
    },

    _goBackToProductsList () {
        this.props.goBackToProductsListHandler();
    },

    _addProductToCart (productId) {
        this.props.addProductToCartHandler(productId);
    },

    render () {
        const productDetails = this.state.product;

        if (!productDetails) {
            return null;
        }

        return (
            <div className="ProductDetails col-xs-8">
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

export default ProductDetails;
