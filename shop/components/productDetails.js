import React from 'react'
import {Link} from 'react-router'
import BlockText from './blockText'
import ProductsApi from '../productsApi'

const imageStyle = {
  height: '200px',
  padding: '10px'
}

const ProductDetails = React.createClass({
  propTypes: {
    params: React.PropTypes.object.isRequired
  },

  getInitialState () {
    return {
      product: null
    }
  },

  componentDidMount () {
    ProductsApi.getById(this.props.params.id, (error, response) => {
      if (error) {
        window.alert(error)
        return
      }

      this.setState({product: response})
    })
  },

  render () {
    const {product} = this.state
    return (
      <div>
        {
          !product ? null : (
          <div>
            <BlockText color='orange' text={product.name} />
            <div>
              <img style={imageStyle} src={`/images/${product.id}.jpg`} />
              <span>{product.shortDescription}</span>
            </div>
            <div>{product.description}</div>
            <Link to='/'>Go back</Link>
          </div>
          )
        }
      </div>
    )
  }
})

export default ProductDetails
