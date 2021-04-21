import ReactDDD, { Component } from 'react';

class App extends Component {
  render () {
    return (
    <>
      <label htmlFor="bar">bar</label>

      <input type="text" onClick={() => { console.log("I am clicked") }} />
    </>
    )
  }
}

export default App;
