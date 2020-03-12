import React, { Component } from 'react';
// import { Counter } from './Counter';
import { CounterFunc } from './Counter';

export class App extends Component {
  state = {
    isShowCounter: true,
    counter: 1
  }

  handleShowCounter = () => {
    this.setState((state) => ({isShowCounter: !state.isShowCounter}))
  }

  handleCounter = (value) => {
    this.setState((state) => ({counter: state.counter + value}))
  }

  render() {
    const {isShowCounter, counter} = this.state;
    return(
      <>
        {isShowCounter && <CounterFunc counter={counter} handleCounter={this.handleCounter} />}
        <p><button onClick={this.handleShowCounter}>
            {isShowCounter ? 'Hide counter' : 'Show counter'}
          </button></p>
      </>
    )
  }
}
