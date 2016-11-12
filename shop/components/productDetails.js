import React from 'react'
import BlockText from './blockText'
import products from '../mockedProducts'

const imageStyle = {
  height: '200px',
  padding: '10px'
}

const ProductDetails = React.createClass({
  propTypes: {
    selectedProductId: React.PropTypes.number.isRequired,
    resetSelectedProductId: React.PropTypes.func.isRequired
  },

  render () {
    const product = products.find(product => product.id === this.props.selectedProductId)
    return (
      <div>
        <BlockText color='orange' text={product.name} />
        <div>
          <img style={imageStyle} src={`images/${product.id}.jpg`} />
          <span>{product.shortDescription}</span>
        </div>
        <div>{product.description}</div>
        <button onClick={this.props.resetSelectedProductId}>Back</button>
      </div>
    )
  }
})

export default ProductDetails
