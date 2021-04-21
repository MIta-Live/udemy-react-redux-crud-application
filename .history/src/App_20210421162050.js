import React, { Component } from 'react';

class App extends Component {
  render () {
    return (
    <div>
      <label htmlFor="bar">b</label>
      return <input type="text" onClick={() => { console.log("I am clicked") }} />
    </div>
    )
  }
}

export default App;
