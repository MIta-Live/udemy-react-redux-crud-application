import ReactDDD, { Component } from 'react';

class App extends Component {
  render () {
    return (
    <React>
      <label htmlFor="bar">bar</label>
      <input type="text" onClick={() => { console.log("I am clicked") }} />
    </React>
    )
  }
}

export default App;
