const React = require('react')
const ReactDOM = require('react-dom')

const Greetings = require('./components/greetings.js')
const div = React.DOM.div

const GreetingsFactory = React.createFactory(Greetings)

const SecondComponent = div(null,
    GreetingsFactory({color: 'red', text: 'Hello from'}),
    GreetingsFactory({color: 'green', text: 'the first'}),
    GreetingsFactory({text: 'component'}),
    GreetingsFactory({text: 'dawg'})
)

ReactDOM.render(SecondComponent, document.getElementById('app'))
