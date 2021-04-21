import React, { Component } from 'react';

/* class App extends Component {
  render () {
    return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onClick={() => { console.log("I am clicked") }} />
    </React.Fragment>
    )
  }
} */

const App = () => {
  return (
    <div>
      <User name={"Taro"} age={10}/>
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}</div>
}

export default App;
