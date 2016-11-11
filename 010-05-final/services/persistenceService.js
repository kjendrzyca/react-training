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
  },
  toggleDone (todoId, callback) {
    try {
      const todos = JSON.parse(window.localStorage.getItem('todos'))
      const todoToUpdateIndex = todos.findIndex(todo => todo.id === todoId)
      const todoToUpdate = todos[todoToUpdateIndex]
      todoToUpdate.done = !todoToUpdate.done

      const updatedTodos = [
        ...todos.slice(0, todoToUpdateIndex),
        ...todos.slice(todoToUpdateIndex + 1),
        todoToUpdate
      ]

      window.localStorage.setItem('todos', JSON.stringify(updatedTodos))
    } catch (error) {
      callback(error)
      return
    }

    callback()
  }
}
