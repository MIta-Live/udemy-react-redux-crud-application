import ReactDDD, { Component } from 'react';

class App extends Component {
  render () {
    return (
    <d>
      <label htmlFor="bar">bar</label>
      <input type="text" onClick={() => { console.log("I am clicked") }} />
    </d>
    )
  }
}

export default App;
