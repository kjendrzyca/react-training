import React from 'react'
import {Link} from 'react-router'

import InputBox from './inputBox'
import PersistenceService from '../services/persistenceService'

const getId = () => Date.now().toString()

const TodoListItem = ({todo}) => {
  const elementStyle = {textDecoration: todo.done ? 'line-through' : 'none'}
  return <div><Link style={elementStyle} to={`/todo/${todo.id}`}>{todo.text}</Link></div>
}
TodoListItem.propTypes = {
  todo: React.PropTypes.object.isRequired
}

const TodoList = React.createClass({
  getInitialState () {
    return {
      todos: []
    }
  },

  componentDidMount () {
    const todos = PersistenceService.load()

    if (!todos) {
      return
    }

    this.setState({todos: todos}, () => console.log(this.state))
  },

  addTodo (newTodo) {
    this.setState(state => {
      return {
        todos: [
          ...state.todos,
          {id: getId(), text: newTodo.text, priority: newTodo.priority, done: false}
        ]
      }
    }, () => PersistenceService.persist(this.state.todos))
  },

  render () {
    const {todos} = this.state
    return (
      <div className='TodoList'>
        {
          todos.map(todo => <TodoListItem key={todo.id} todo={todo} />)
        }
        <InputBox addTodo={this.addTodo} />
      </div>
    )
  }
})

export default TodoList
