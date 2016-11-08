const React = require('react')

const InputBox = React.createClass({
  propTypes: {
    addTodo: React.PropTypes.func.isRequired
  },

  getInitialState () {
    return {
      text: ''
    }
  },

  changeText (event) {
    this.setState({text: event.target.value})
  },

  addTodo () {
    this.props.addTodo(this.state.text)
    this.setState({text: ''})
  },

  render () {
    return (
      <div>
        <span>New todo:</span>
        <input type='text' onChange={this.changeText} value={this.state.text} />
        <button onClick={this.addTodo}>Add</button>
      </div>
    )
  }
})

export default InputBox
