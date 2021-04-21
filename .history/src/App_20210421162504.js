import React from 'react';
import ReactDDD, { Component } from 'react';

class App extends Component {
  render () {
    return (
    <ReactFragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onClick={() => { console.log("I am clicked") }} />
    </ReactFragment>
    )
  }
}

export default App;
