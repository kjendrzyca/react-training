import React from 'react'
import ReactDOM from 'react-dom'

import BlockText from './components/blockText'
import ProductsList from './components/productsList'

const ShopLogo = <div>
  <BlockText color='red' fontSize={30} text='SuperShop' />
  <BlockText color='blue' text='This is where your dreams come true' />
  <ProductsList />
</div>

ReactDOM.render(ShopLogo, document.getElementById('app'))
