import React from 'React'
import ReactDOM from 'react-dom'
import InputBox from './components/inputBox'
import TodoList from './components/todoList'

let i = 0

const App = React.createClass({
  getInitialState () {
    return {
      todos: [
        {id: ++i, text: 'buy groceries'},
        {id: ++i, text: 'visit mom'},
        {id: ++i, text: 'prepare dinner'}
      ],
      activeDetails: 0
    }
  },

  addTodo (newTodo) {
    this.setState(state => {
      state.todos.push({id: ++i, text: newTodo})
      return state
    })
  },

  navigateTo (todoId) {
    this.setState({activeDetails: todoId}, () => console.log(this.state))
  },

  render () {
    return (
      <div className='App'>
        <div>TODO:</div>
        <TodoList navigateTo={this.navigateTo} todos={this.state.todos} />
        <InputBox addTodo={this.addTodo} />
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
