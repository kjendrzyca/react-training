import React from 'react'

const SearchBox = React.createClass({
  propTypes: {
    search: React.PropTypes.func.isRequired
  },

  getInitialState () {
    return {
      text: ''
    }
  },

  setText (event) {
    this.setState({text: event.target.value})
  },

  search () {
    this.props.search(this.state.text)
  },

  render () {
    return (
      <div>
        <input type='text' onChange={this.setText} placeholder='Search...' />
        <button onClick={this.search}>Search!</button>
      </div>
    )
  }
})

export default SearchBox
