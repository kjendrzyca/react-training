export default {
  persist (todos) {
    window.localStorage.setItem('todos', JSON.stringify(todos))
  },
  load () {
    return JSON.parse(window.localStorage.getItem('todos'))
  },
  getTodoById (id) {
    const todos = JSON.parse(window.localStorage.getItem('todos'))
    return todos.find(todo => todo.id === id)
  }
}
