import React from 'react';
import {Link} from 'react-router';

const PropTypes = React.PropTypes;

const CartInfo = React.createClass({

    propTypes: {
        cart: PropTypes.array.isRequired
    },

    render () {
        return (
            <div className="CartInfo col-xs-4">
                <div className="pull-right">
                    <div>Prodcuts in cart: {this.props.cart.length}</div>
                    <div>
                        Total cost:
                        {
                            this.props.cart
                                .map(product => product.price)
                                .reduce((prev, next) => (prev + next), 0)
                        }
                    </div>
                    <Link to="/cart">Proceed to checkout</Link>
                </div>
            </div>
        );
    }

});

export default CartInfo;
