import React, { Component, Fragment } from 'react';

// export class Counter extends Component {

//     //

//     // constructor(props){
//     //     super(props);
//         // this.state = {
//         //     counter: 1,
//         // }
//     //     this.handleClick = this.handleClick.bind(this);
//     // }

//     handleClick = (event) => {
//         const action =  Number(event.currentTarget.dataset.action);
//         // this.setState((state) => ({counter: state.counter + action}));
//         this.props.handleCounter(action);
//     }

//     componentDidMount() {
//         console.log("componentDidMount");
//     }

//     componentDidUpdate() {
//         console.log("componentDidUpdate");
//     }

//     componentWillUnmount() {
//         console.log("componentWillUnmount");
//     }

//     render() {
//         const {props: {counter}, handleClick} = this;
//         return (
//         <p>
//             <button data-action='-1' onClick={handleClick}>-1</button><br />
//             {counter}<br />
//             <button data-action='1' onClick={handleClick}>+1</button>
//         </p>
//         )
//     }
// }


export const CounterFunc = ({counter, handleCounter}) => {

    const handleClick = (event) => {
        const action =  Number(event.currentTarget.dataset.action);
        handleCounter(action);
    }

    return (
        <p>
            <button data-action='-1' onClick={handleClick}>-1</button><br />
            {counter}<br />
            <button data-action='1' onClick={handleClick}>+1</button>
        </p>
    )
}

// const Test = "test import";

// export const Content = Test;
// export { Test };
// export default Test;
