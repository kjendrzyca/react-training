import React from 'React'
import ReactDOM from 'react-dom'
import InputBox from './components/inputBox'
import TodoList from './components/todoList'
import TodoDetails from './components/todoDetails'

let i = 0

const App = React.createClass({
  getInitialState () {
    return {
      todos: [
        {id: ++i, text: 'buy groceries', priority: 5},
        {id: ++i, text: 'visit mom', priority: 10},
        {id: ++i, text: 'prepare dinner', priority: 5}
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

  close () {
    this.setState({activeDetails: 0})
  },

  render () {
    return (
      <div className='App'>
        <div>TODO:</div>
        {
          this.state.activeDetails
            ? <TodoDetails close={this.close} todo={this.state.todos.find(t => t.id === this.state.activeDetails)} />
            : <div>
              <TodoList navigateTo={this.navigateTo} todos={this.state.todos} />
              <InputBox addTodo={this.addTodo} />
            </div>
        }
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
