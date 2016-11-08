export default {
  persist (todos) {
    window.localStorage.setItem('todos', JSON.stringify(todos))
  },
  load () {
    return JSON.parse(window.localStorage.getItem('todos'))
  }
}
