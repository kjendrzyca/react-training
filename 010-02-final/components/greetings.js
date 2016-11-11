const React = require('react')

const Greetings = React.createClass({
  getDefaultProps () {
    return {color: 'aqua'}
  },

  render () {
    const {color, text} = this.props

    return (
      <div style={{padding: 10, backgroundColor: 'black'}}>
        <h1 style={{color: color}}>{text}</h1>
      </div>
    )
  }
})

module.exports = Greetings
