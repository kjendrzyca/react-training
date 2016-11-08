import React from 'React'
import ReactDOM from 'react-dom'
import InputBox from './components/inputBox'
import TodoList from './components/todoList'
import TodoDetails from './components/todoDetails'
import PersistenceService from './services/persistenceService'

const getId = () => Date.now().toString()

const App = React.createClass({
  getInitialState () {
    return {
      todos: [],
      activeDetails: 0
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

  navigateTo (todoId) {
    this.setState({activeDetails: todoId}, () => console.log(this.state))
  },

  close () {
    this.setState({activeDetails: 0})
  },

  toggleDone (todoId) {
    this.setState(({todos}) => {
      const todoToUpdateIndex = todos.findIndex(todo => todo.id === todoId)
      const todoToUpdate = todos[todoToUpdateIndex]
      todoToUpdate.done = !todoToUpdate.done

      return [
        ...todos.slice(0, todoToUpdateIndex),
        ...todos.slice(todoToUpdateIndex),
        todoToUpdate
      ]
    }, () => PersistenceService.persist(this.state.todos))
  },

  render () {
    return (
      <div className='App'>
        <div>TODO:</div>
        {
          this.state.activeDetails
            ? (
              <TodoDetails
                close={this.close}
                todo={this.state.todos.find(t => t.id === this.state.activeDetails)}
                toggleDone={this.toggleDone}
              />
            ) : <div>
              <TodoList navigateTo={this.navigateTo} todos={this.state.todos} />
              <InputBox addTodo={this.addTodo} />
            </div>
        }
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
