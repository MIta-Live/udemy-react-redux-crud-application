import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {count: 0}
  }

  render() {
  return (<div>count: { this.state.count }</div>
    <button)
  }
}

export default App;
