import React from 'react';
import ProductsList from './productsList';
import CartInfo from './cartInfo';
import ProductDetails from './productDetails';
import ProductsApi from '../productsApi';

const Store = React.createClass({

    getInitialState () {
        return {
            cart: [],
            currentlyDisplayedProductId: 0,
            products: []
        };
    },

    componentDidMount () {
        ProductsApi.getAll((error, products) => {
            if (error) {
                alert(error);
                return;
            }

            this.setState({products: products});
        });
    },

    _addProductToCartHandler (productId) {
        const productToAdd = this.state.products.find(product => {
            return product.id === productId;
        });

        if (!productToAdd) {
            alert('no such product');
            return;
        }

        this.setState(({cart}) => {
            const newCart = cart;
            newCart.push(productToAdd);

            return {
                cart: newCart
            };
        });
    },

    _seeDetailsHandler (productId) {
        this.setState(() => {
            return {currentlyDisplayedProductId: productId};
        });
    },

    _goBackHandler () {
        this.setState({currentlyDisplayedProductId: 0});
    },

    _getCurrentView () {
        const currentlyDisplayedProductId = this.state.currentlyDisplayedProductId;

        if (currentlyDisplayedProductId) {
            return (
                <ProductDetails
                    addProductToCartHandler={this._addProductToCartHandler}
                    goBackToProductsListHandler={this._goBackHandler}
                    productId={currentlyDisplayedProductId}
                />
            );
        }

        return (
            <ProductsList
                addProductToCartHandler={this._addProductToCartHandler}
                products={this.state.products}
                seeDetailsHandler={this._seeDetailsHandler}
            />
        );

    },

    render () {
        return (
            <div className="Store">
                <div className="row">
                    <h1 className="col-xs-8">Welcome !</h1>
                    <CartInfo cart={this.state.cart} />
                </div>

                <div className="row">
                    {this._getCurrentView()}
                </div>


            </div>
        );
    }

});

export default Store;
