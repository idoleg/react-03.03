import React, { Component, Fragment } from 'react';

export class Counter extends Component {

  state = {
    counter: 1,
  };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     counter: 1,
  //   }
  // }

handleClick(event) {
  event.persist();
  console.log("Counter->handleClick->event", event);
}

  render() {
    return (
      <p>
        {this.state.counter}
        <button onClick = {this.handleClick}>+1</button>
      </p>
    )
  }
}
