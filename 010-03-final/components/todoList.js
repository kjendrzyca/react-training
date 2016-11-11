import React from 'react'

const TodoListItem = ({todo, navigate}) => {
  return <div onClick={() => navigate(todo.id)}>{todo.text}</div>
}
TodoListItem.propTypes = {
  todo: React.PropTypes.object.isRequired,
  navigate: React.PropTypes.func.isRequired
}

const TodoList = React.createClass({
  propTypes: {
    navigateTo: React.PropTypes.func.isRequired,
    todos: React.PropTypes.array.isRequired
  },

  navigate (todoId) {
    console.log(this.props)
    this.props.navigateTo(todoId)
  },

  render () {
    const {todos} = this.props
    return (
      <div className='TodoList'>
        {
          todos.map(todo => <TodoListItem key={todo.id} todo={todo} navigate={this.navigate} />)
        }
      </div>
    )
  }
})

export default TodoList
