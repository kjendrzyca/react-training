import React from 'react'
import products from '../mockedProducts'
import BlockText from './blockText'

const imageStyle = {
  height: '150px',
  padding: '10px'
}

const ProductsList = React.createClass({
  render () {
    return (
      <div>
        {
          products.map(product => (
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
