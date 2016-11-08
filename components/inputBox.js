const React = require('react')

const InputBox = React.createClass({
  propTypes: {
    addTodo: React.PropTypes.func.isRequired
  },

  getInitialState () {
    return {
      text: '',
      priority: ''
    }
  },

  changeText (event) {
    this.setState({text: event.target.value})
  },

  changePriority (event) {
    this.setState({priority: event.target.value})
  },

  addTodo () {
    this.props.addTodo(this.state)
    this.setState({text: '', priority: ''})
  },

  render () {
    return (
      <div>
        <span>New todo:</span>
        <input type='text' onChange={this.changeText} placeholder='text' value={this.state.text} />
        <input type='text' onChange={this.changePriority} placeholder='priority' value={this.state.priority} />
        <button onClick={this.addTodo}>Add</button>
      </div>
    )
  }
})

export default InputBox
