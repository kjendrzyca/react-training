const React = require('react')
const ReactDOM = require('react-dom')
const div = React.DOM.div

const BlockText = React.createFactory(require('./components/blockText'))

const ShopLogo = div(null,
  BlockText({color: 'red', fontSize: 30, text: 'SuperShop'}),
  BlockText({color: 'blue', text: 'This is where your dreams come true'})
)

ReactDOM.render(ShopLogo, document.getElementById('app'))
