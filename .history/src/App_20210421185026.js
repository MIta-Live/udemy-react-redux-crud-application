import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {count: 0}
  }

  render() {
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onC>+1</button>
        <button>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
