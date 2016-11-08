import React from 'react'

const TodoDetails = ({close, todo, toggleDone}) => (
  <div className='TodoDetails'>
    <div>Id: {todo.id}</div>
    <div>Text: {todo.text}</div>
    <div>Priority: {todo.priority}</div>
    <div>Done: <input type='checkbox' checked={todo.done} onChange={() => toggleDone(todo.id)} /></div>
    <button onClick={close}>CLOSE</button>
  </div>
)

TodoDetails.propTypes = {
  close: React.PropTypes.func.isRequired,
  todo: React.PropTypes.object.isRequired,
  toggleDone: React.PropTypes.func.isRequired
}

export default TodoDetails
