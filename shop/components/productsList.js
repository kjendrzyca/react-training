import React from 'react'
import products from '../mockedProducts'
import BlockText from './blockText'
import SearchBox from './searchBox'

const imageStyle = {
  height: '150px',
  padding: '10px'
}

const filterBy = (searchTerm, products) => {
  return products.filter(
    product => product.name.indexOf(searchTerm) > -1 ||
      product.shortDescription.indexOf(searchTerm) > -1
  )
}

const ProductsList = React.createClass({
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
            <div key={product.id}>
              <BlockText color='orange' text={product.name} />
              <div>
                <img style={imageStyle} src={`images/${product.id}.jpg`} />
                <span>{product.shortDescription}</span>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
})

export default ProductsList
