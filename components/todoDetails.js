import React from 'react'
import {Link} from 'react-router'

import PersistenceService from '../services/persistenceService'

const toggleDone = (todoId) => {
  console.log('works!')
  return
  // this.setState(({todos}) => {
  //   const todoToUpdateIndex = todos.findIndex(todo => todo.id === todoId)
  //   const todoToUpdate = todos[todoToUpdateIndex]
  //   todoToUpdate.done = !todoToUpdate.done
  //
  //   return [
  //     ...todos.slice(0, todoToUpdateIndex),
  //     ...todos.slice(todoToUpdateIndex),
  //     todoToUpdate
  //   ]
  // }, () => PersistenceService.persist(this.state.todos))
}

const TodoDetails = React.createClass({
  propTypes: {
    params: React.PropTypes.object.isRequired
  },

  getInitialState () {
    return {
      todo: {}
    }
  },

  componentDidMount () {
    this.setState({todo: PersistenceService.getTodoById(this.props.params.id)})
  },

  render () {
    const {todo} = this.state

    return (
      <div className='TodoDetails'>
        <div>Id: {todo.id}</div>
        <div>Text: {todo.text}</div>
        <div>Priority: {todo.priority}</div>
        <div>Done: <input type='checkbox' checked={todo.done} onChange={() => toggleDone(todo.id)} /></div>
        <Link to='/'>CLOSE</Link>
      </div>
    )
  }
})

export default TodoDetails
