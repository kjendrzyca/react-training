import React from 'react'
import BlockText from './blockText'

const imageStyle = {
  height: '150px',
  padding: '10px'
}

const ProductListItem = React.createClass({
  propTypes: {
    product: React.PropTypes.object.isRequired,
    selectProduct: React.PropTypes.func.isRequired
  },

  selectProduct () {
    this.props.selectProduct(this.props.product.id)
  },

  render () {
    const {product} = this.props
    return (
      <div onClick={this.selectProduct}>
        <BlockText color='orange' text={product.name} />
        <div>
          <img style={imageStyle} src={`images/${product.id}.jpg`} />
          <span>{product.shortDescription}</span>
        </div>
      </div>
    )
  }
})

export default ProductListItem
