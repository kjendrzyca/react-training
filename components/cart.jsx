import React from 'react';
import {Link} from 'react-router';
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
        if (!this.state.cart.length) {
            return <div>Empty!</div>;
        }

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

    _finalizePurchase () {
        this.setState({cart: []}, () => {
            window.sessionStorage.setItem('cart', JSON.stringify([]));
            alert('Thank you for buying!');
        });
    },

    _showFinalizeButton () {
        if (this.state.cart.length) {
            return <button className="btn btn-default" onClick={this._finalizePurchase}>Finalize purchase</button>;
        }
    },

    render () {
        return (
            <div className="Cart">
                <div className="row">
                    <h1 className="col-xs-8">Cart</h1>
                </div>
                {this._getCartItems()}
                {this._showFinalizeButton()}
                <hr />
                <Link to="/">Back to list</Link>
            </div>
        );
    }

});

export default Cart;
