import 'whatwg-fetch'
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import BlockText from './components/blockText'
import ProductsList from './components/productsList'
import ProductDetails from './components/productDetails'

const Shop = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired
  },

  render () {
    return (
      <div>
        <BlockText color='red' fontSize={30} text='SuperShop' />
        <BlockText color='blue' text='This is where your dreams come true' />
        {this.props.children}
      </div>
    )
  }
})

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={Shop}>
      <IndexRoute component={ProductsList} />
      <Route path='products/:id' component={ProductDetails} />
    </Route>
  </Router>
), document.getElementById('app'))
