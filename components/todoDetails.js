import React from 'react'

const TodoDetails = ({close, todo}) => (
  <div className='TodoDetails'>
    <div>Id: {todo.id}</div>
    <div>Text: {todo.text}</div>
    <div>Priority: {todo.priority}</div>
    <button onClick={close}>CLOSE</button>
  </div>
)

TodoDetails.propTypes = {
  close: React.PropTypes.func.isRequired,
  todo: React.PropTypes.object.isRequired
}

export default TodoDetails
