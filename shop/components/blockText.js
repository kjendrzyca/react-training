import React from 'react'
const PropTypes = React.PropTypes

const BlockText = React.createClass({
  propTypes: {
    color: PropTypes.string,
    fontFamily: PropTypes.string,
    fontSize: PropTypes.number,
    text: PropTypes.string.isRequired
  },

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

export default BlockText
