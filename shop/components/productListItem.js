import React from 'react'
import {Link} from 'react-router'
import BlockText from './blockText'

const imageStyle = {
  height: '150px',
  padding: '10px'
}

const ProductListItem = React.createClass({
  propTypes: {
    product: React.PropTypes.object.isRequired
  },

  render () {
    const {product} = this.props
    return (
      <div>
        <BlockText color='orange' text={product.name} />
        <div>
          <img style={imageStyle} src={`/images/${product.id}.jpg`} />
          <span>{product.shortDescription}</span>
        </div>
        <Link to={`products/${product.id}`}>Show details</Link>
      </div>
    )
  }
})

export default ProductListItem
