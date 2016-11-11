import React from 'react';
import {Link} from 'react-router';
import _ from 'lodash';
import CartStore from '../stores/cartStore';
import CartActions from '../stores/cartActions';

import './common.css';
import './cart.css';

const Cart = React.createClass({

    getInitialState () {
        return {
            cart: []
        };
    },

    componentDidMount () {
        CartStore.addChangeListener(this._onChange);
        this._addCartToState(CartStore.getCart());
    },

    componentWillUnmount () {
        CartStore.removeChangeListener(this._onChange);
    },

    _onChange () {
        this._addCartToState(CartStore.getCart());
    },

    _addCartToState (cartFromStore) {
        this.setState({cart: cartFromStore});
    },

    _getCartItems () {
        if (!this.state.cart.length) {
            return <div>Empty!</div>;
        }

        const uniqueProducts = _.unique(this.state.cart, 'id');
        const countById = _.countBy(this.state.cart, 'id');

        return uniqueProducts.map((product) => {
            return (
                <div className="row" key={product.id}>
                    <div className="col-xs-4 product-image-box">
                        <img
                            alt={`${product.name}`}
                            className="product-image"
                            src={`images/${product.id}.jpg`}
                        />
                    </div>
                    <div className="col-xs-8">
                        <h3>{product.name}</h3>
                        <p>Price: {product.price} PLN</p>
                        <p>How many: {countById[product.id]}</p>
                        <p><strong>Total: {product.price * countById[product.id]} PLN</strong></p>
                        <button
                            className="btn btn-default"
                            onClick={this._removeFromCart.bind(null, product.id)}
                        >
                            Remove
                        </button>
                        <hr />
                    </div>
                </div>
            );
        });
    },

    _removeFromCart (productId) {
        CartActions.remove(productId);
    },

    _finalizePurchase () {
        CartActions.clear();
        alert('Thanks for buying!');
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
                <hr />
                {this._showFinalizeButton()} <Link to="/">Back to list</Link>
            </div>
        );
    }

});

export default Cart;
