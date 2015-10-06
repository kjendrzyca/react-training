import React from 'react';
let PropTypes = React.PropTypes;

let CartInfo = React.createClass({

    propTypes: {
        cart: PropTypes.array.isRequired
    },

    _proceedToCheckout () {
        alert('proceeding!');
    },

    render () {
        return (
            <div className="CartInfo">
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
                    <button className="btn btn-primary" onClick={this._proceedToCheckout}>Proceed to checkout</button>
                </div>
            </div>
        );
    }

});

export default CartInfo;
