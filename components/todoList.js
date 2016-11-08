import React from 'react'

const TodoList = React.createClass({
  propTypes: {
    todos: React.PropTypes.array.isRequired
  },

  render () {
    const {todos} = this.props
    return (
      <div className='TodoList'>{todos.map(todo => <div key={todo.id}>{todo.text}</div>)}</div>
    )
  }
})

export default TodoList
