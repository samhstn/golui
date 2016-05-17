import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.state = { count: 1 }
  }
  handleClick(increment) {
    this.setState(function(previousState) {
      console.log(previousState)
      return { count: previousState.count + increment }
    })
  }
  render() {
    return (
      <div>
        <h1>Game of Life</h1>
        <div>{this.state.count}</div>
        {
          [1, 2, 3].map(el => {
            return <button onClick={this.handleClick.bind(this, el)}>{'click' + el }</button>
          })
        }
      </div>
    )
  }
}
