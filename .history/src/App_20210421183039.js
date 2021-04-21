import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor() 
  render() {
    console.log(this.state)
    return (<div>counter</div>)
  }
}

export default App;
