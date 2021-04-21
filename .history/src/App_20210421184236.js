import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {count: 0}
  }

  render() {

  return (
    <React
  <div>count: { this.state.count }</div>
    <button>+1</button>)
  }
}

export default App;
