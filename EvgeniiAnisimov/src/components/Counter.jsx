import React, { Component, Fragment } from 'react';

// export class Counter extends Component {
//
//   // state = {
//   //   counter: 1,
//   // };
//
//   // constructor(props) {
//   //   super(props);
//   //   this.handleClick = this.handleClick.bind(this);
//   //   this.state = {
//   //     counter: 1,
//   //   }
//   // }
//
//   handleClick = (event) => {
//     // console.log(event.currentTarget.dataset.action);
//     const action = Number(event.currentTarget.dataset.action);
//     this.props.handleCounter(action);
//     // event.persist();
//     // console.log(this);
//     // this.state.counter++;
//     // this.forceUpdate();
//     // this.setState({counter: ++this.state.counter});
//     // this.setState(//1
//     //   (state) => ({counter: state.counter + action}))//2
//     // console.log(this.state.counter);
//   }
//
//   // componentWillMount() {
//   //   console.log("Counter->componentWillMount");
//   // }
//
//   componentDidMount() {
//     console.log("Counter->componentDidMount");
//   }
//
//   // componentWillUpdate() {
//   //   console.log("Counter->componentWillUpdate");
//   // }
//
//   componentDidUpdate() {
//     console.log("Counter->componentDidUpdate");
//   }
//
//   componentWillUnmount() {
//     console.log("Counter->componentWillUnmount");
//   }
//
//   render() {
//     // const {state: {counter}, handleClick} = this;
//     const {props: {counter}, handleClick} = this;
//     return (
//       <p>
//         <button data-action="-1" onClick = {handleClick}>-1</button>
//         {counter}
//         <button data-action="1" onClick = {handleClick}>+1</button>
//       </p>
//     )
//   }
// }

export const CounterFunc = ({counter, handleCounter}) => {
  const handleClick = (event) => {
    const action = Number(event.currentTarget.dataset.action);
    handleCounter(action);
  }

  return(
    <p>
      <button data-action="-1" onClick = {handleClick}>-1</button>
      {counter}
      <button data-action="1" onClick = {handleClick}>+1</button>
    </p>
  )
}
