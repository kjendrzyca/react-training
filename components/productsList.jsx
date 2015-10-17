import React from 'react';
const PropTypes = React.PropTypes;

const ProductsList = React.createClass({

    propTypes: {
        addProductToCartHandler: PropTypes.func.isRequired,
        products: PropTypes.array.isRequired,
        seeDetailsHandler: PropTypes.func.isRequired
    },

    getInitialState () {
        return {
            searchText: ''
        };
    },

    _addProductToCart (productId) {
        this.props.addProductToCartHandler(productId);
    },

    _seeDetails (productId) {
        this.props.seeDetailsHandler(productId);
    },

    _changeSearchText ($event) {
        let searchText = $event.target.value;
        this.setState({searchText: searchText});
    },

    _getProducts () {
        return this._filterBySearchText(this.props.products).map(product => {
            return (
                <div className="row" key={product.id}>
                    <div className="col-xs-4">
                        <img
                            alt={`${product.name}`}
                            className="product-image"
                            src={`images/${product.id}.jpg`}
                        />
                    </div>
                    <div className="col-xs-8">
                        <h3>{product.name}</h3>
                        <p>{product.shortDescription}</p>
                        <p>Price: {product.price} PLN</p>
                        <button className="btn btn-default" onClick={this._addProductToCart.bind(null, product.id)}>Add to cart</button>
                        <button className="btn btn-default" onClick={this._seeDetails.bind(null, product.id)}>See details</button>
                        <hr />
                    </div>
                </div>
            );
        });
    },

    _filterBySearchText (productsList) {
        if (!this.state.searchText) {
            return productsList;
        }

        return this.props.products.filter((product) => {
            return product.name.toLowerCase().indexOf(this.state.searchText.toLowerCase()) > -1;
        });
    },

    render () {
        return (
            <div className="ProductsList col-xs-8">
                <div className="form-group">
                    <input
                        className="form-control"
                        onChange={this._changeSearchText}
                        placeholder="search..."
                        type="text"
                    />
                </div>

                {this._getProducts()}
            </div>
        );
    }
});

export default ProductsList;
