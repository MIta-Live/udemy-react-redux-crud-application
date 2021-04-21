import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {count: 0}
  }

  handlePlusButton = () => {
    console.log("handlePlusButton")
    console.log(this.state.count)
    const count = 4 / 21(水) ～4 / 23(金) 予定: 22.5h
    ・Udemy: 【はむ式】フロントエンドエンジニアのための React ・ Redux アプリケーション開発入門（合計7.5時間）
    this.setState({ count: count + 1 })
  }

  render() {
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
