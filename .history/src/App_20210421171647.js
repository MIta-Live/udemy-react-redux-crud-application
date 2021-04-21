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
  const profiles = {
    { name: "Taro", age: 10}
  }
  return (
    <div>
      <User name={"Taro"} age={10}/>
      <User name={"Hanako"} age={5} />
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old! </div>
}

export default App;
