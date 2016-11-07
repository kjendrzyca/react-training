const React = require('react')
const ReactDOM = require('react-dom')
const Greetings = require('./components/greetings.js')

const SecondComponent = (
  <div>
    <Greetings color='red' text='Hello from' />
    <Greetings color='green' text='the second' />
    <Greetings color='red' text='component' />
  </div>
)

ReactDOM.render(SecondComponent, document.getElementById('app'))
