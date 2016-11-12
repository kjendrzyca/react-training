import React from 'react'
import products from '../mockedProducts'
import SearchBox from './searchBox'
import ProductListItem from './productListItem'

const filterBy = (searchTerm, products) => {
  return products.filter(
    product => product.name.indexOf(searchTerm) > -1 ||
      product.shortDescription.indexOf(searchTerm) > -1
  )
}

const ProductsList = React.createClass({
  propTypes: {
    selectProduct: React.PropTypes.func.isRequired
  },

  getInitialState () {
    return {
      searchTerm: ''
    }
  },

  search (searchTerm) {
    this.setState({searchTerm: searchTerm}, () => console.log('search term', this.state.searchTerm))
  },

  render () {
    return (
      <div>
        <SearchBox search={this.search} />
        {
          filterBy(this.state.searchTerm, products).map(product => (
            <ProductListItem key={product.id} product={product} selectProduct={this.props.selectProduct} />
          ))
        }
      </div>
    )
  }
})

export default ProductsList
