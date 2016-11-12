const React = require('react')
const div = React.DOM.div

const BlockText = React.createClass({
  getDefaultProps () {
    return {
      color: 'black',
      fontFamily: 'Verdana',
      fontSize: 14
    }
  },

  render () {
    const {color, fontFamily, fontSize, text} = this.props
    return (
      div({style: {color: color, fontFamily: fontFamily, fontSize: fontSize}}, text)
    )
  }
})

module.exports = BlockText
