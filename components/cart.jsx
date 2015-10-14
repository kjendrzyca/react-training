import React from 'react';
import _ from 'lodash';

const Cart = React.createClass({

    getInitialState () {
        return {
            cart: []
        };
    },

    componentDidMount () {
        const cart = window.sessionStorage.getItem('cart');
        if (!cart) {
            return;
        }

        this._addCartToState(cart);
    },

    _addCartToState (cart) {
        this.setState({cart: JSON.parse(cart)});
    },

    _getCartItems () {
        const uniqueProducts = _.unique(this.state.cart, 'id');
        const countById = _.countBy(this.state.cart, 'id');

        return uniqueProducts.map((product) => {
            return (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>Price: {product.price} PLN</p>
                    <p>How many: {countById[product.id]}</p>
                    <p>Total: {product.price * countById[product.id]}</p>
                    <hr />
                </div>
            );
        });
    },

    render () {
        return (
            <div className="Cart">
                {this._getCartItems()}
            </div>
        );
    }

});

export default Cart;
