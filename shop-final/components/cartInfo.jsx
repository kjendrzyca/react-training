import React from 'react';
import {Link} from 'react-router';
import './cartInfo.css';
const PropTypes = React.PropTypes;

const CartInfo = React.createClass({

    propTypes: {
        cart: PropTypes.array.isRequired
    },

    render () {
        return (
            <div className="CartInfo col-xs-4">
                <div className="pull-right">
                    <div>Prodcuts in cart: <strong>{this.props.cart.length}</strong></div>
                    <div>
                        Total cost: <strong>
                        {
                            this.props.cart
                                .map(product => product.price)
                                .reduce((prev, next) => (prev + next), 0)
                        }</strong>
                    </div>
                    <Link to="/cart">Proceed to checkout</Link>
                </div>
            </div>
        );
    }

});

export default CartInfo;
