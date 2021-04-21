import ReactDDD, { Component } from 'react';

class App extends Component {
  render () {
    return <input type="text" onClick>{() => {console.log(</input>
}

export default App;
