import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  render() {
    console.log(this.state)
  }
}

export default App;
