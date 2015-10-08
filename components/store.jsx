import React from 'react';
import ProductsList from './productsList';
import CartInfo from './cartInfo';
import ProductDetails from './productDetails';

const mockedProducts = [
    {id: 1, name: 'asus laptop', description: 'super cool asus laptop, screen made from dragon tears', price: 2000},
    {id: 2, name: 'macbook', description: 'overpriced but cool laptop for hipsters', price: 7200},
    {id: 3, name: 'samsung tv', description: '42" samsung tv with wi-fi and free beers', price: 1500},
    {id: 4, name: 'das keyboard', description: 'just a normal keyboard with black keys', price: 800},
    {id: 5, name: 'earphones', description: 'soundproof earphones + bonus: celine dion cd with her greatest hits', price: 50}
];

const Store = React.createClass({

    getInitialState () {
        return {
            cart: [],
            currentlyDisplayedProductId: 0
        };
    },

    _addProductToCartHandler (productId) {
        const productToAdd = mockedProducts.find(product => {
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

    _getCurrentView () {
        const currentlyDisplayedProductId = this.state.currentlyDisplayedProductId;

        if (currentlyDisplayedProductId) {
            const productToDisplay = mockedProducts.find(product => {
                return product.id === currentlyDisplayedProductId;
            });

            return (
                <ProductDetails
                    details={productToDisplay}
                />
            );
        }

        return (
            <ProductsList
                addProductToCartHandler={this._addProductToCartHandler}
                products={mockedProducts}
                seeDetailsHandler={this._seeDetailsHandler}
            />
        );

    },

    render () {
        return (
            <div className="Store col-xs-12">
                <h1>Welcome !</h1>

                <CartInfo cart={this.state.cart} />

                {this._getCurrentView()}

            </div>
        );
    }

});

export default Store;
