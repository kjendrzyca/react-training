import React from 'react'
import ReactDOM from 'react-dom'

import BlockText from './components/blockText'
import ProductsList from './components/productsList'
import ProductDetails from './components/productDetails'

const Shop = React.createClass({
  getInitialState () {
    return {
      selectedProductId: 0
    }
  },

  selectProduct (id) {
    this.setState({selectedProductId: id}, () => console.log(this.state))
  },

  resetSelectedProductId () {
    this.setState({selectedProductId: 0})
  },

  render () {
    return (
      <div>
        <BlockText color='red' fontSize={30} text='SuperShop' />
        <BlockText color='blue' text='This is where your dreams come true' />
        {
          this.state.selectedProductId > 0
            ? (
              <ProductDetails
                selectedProductId={this.state.selectedProductId}
                resetSelectedProductId={this.resetSelectedProductId}
              />
            ) : <ProductsList selectProduct={this.selectProduct} />
        }
      </div>
    )
  }
})

ReactDOM.render(<Shop />, document.getElementById('app'))
