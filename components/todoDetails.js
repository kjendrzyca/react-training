import React from 'react'
import {Link} from 'react-router'

import PersistenceService from '../services/persistenceService'

const TodoDetails = React.createClass({
  propTypes: {
    params: React.PropTypes.object.isRequired
  },

  getInitialState () {
    return {
      todo: {done: false}
    }
  },

  componentDidMount () {
    this.setState({todo: PersistenceService.getTodoById(this.props.params.id)})
  },

  toggleDone () {
    PersistenceService.toggleDone(this.props.params.id, (error) => {
      if (error) {
        console.log(error)
        return
      }
      this.setState(({todo}) => {
        todo.done = !todo.done
        return {
          todo: todo
        }
      })
    })
  },

  render () {
    const {todo} = this.state

    return (
      <div className='TodoDetails'>
        <div>Id: {todo.id}</div>
        <div>Text: {todo.text}</div>
        <div>Priority: {todo.priority}</div>
        <div>Done: <input type='checkbox' checked={todo.done} onChange={this.toggleDone} /></div>
        <Link to='/'>CLOSE</Link>
      </div>
    )
  }
})

export default TodoDetails
