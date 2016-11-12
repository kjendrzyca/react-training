const React = require('react')

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
    const style = {color: color, fontFamily: fontFamily, fontSize: fontSize}
    return (
      <div style={style}>{text}</div>
    )
  }
})

module.exports = BlockText
