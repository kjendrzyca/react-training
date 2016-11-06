const React = require('react')

const h1 = React.DOM.h1

const Greetings = React.createClass({
    getDefaultProps () {
        return {color: 'aqua'}
    },

    render () {
        const {color, text} = this.props
        return h1({style: {color: color}}, text)
    }
})

module.exports = Greetings
