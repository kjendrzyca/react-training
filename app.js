import React from 'React'
import ReactDOM from 'react-dom'
import InputBox from './components/inputBox'

let i = 0

const App = React.createClass({
  getInitialState () {
    return {
      todoList: [
        {id: ++i, text: 'buy groceries'},
        {id: ++i, text: 'visit mom'},
        {id: ++i, text: 'prepare dinner'}
      ]
    }
  },

  addTodo (newTodo) {
    this.setState(state => {
      state.todoList.push({id: ++i, text: newTodo})
      return state
    })
  },

  render () {
    return (
      <div className='App'>
        <div>TODO:</div>
        <div>{this.state.todoList.map(todo => <div key={todo.id}>{todo.text}</div>)}</div>
        <InputBox addTodo={this.addTodo} />
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
