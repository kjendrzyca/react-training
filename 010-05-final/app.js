import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import TodoList from './components/todoList'
import TodoDetails from './components/todoDetails'

const Layout = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired
  },

  render () {
    return (
      <div className='Layout'>
        {this.props.children}
      </div>
    )
  }
})

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={TodoList} />
        <Route path='todo/:id' component={TodoDetails} />
      </Route>
    </Router>
  ),
  document.getElementById('app')
)
