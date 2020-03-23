import React from 'react';

// export class Counter extends Component {

//     // state = {
//     //     counter: 1,
//     // };
//     // constructor (props) {
//     //     super(props);
//     //     this.state = {
//     //         counter: 1,
//     //     }

//     // this.handleClick = this.handleClick.bind(this)
//     // }

//     handleClick = (event) => {
//         const action = Number(event.currentTarget.dataset.action);

//         this.props.handleCounter(action);
//         // setTimeout(()=> this.setState({counter: ++this.state.counter}), 0)
//         // this.setState( // 2
//         //     {counter: this.state.counter + 1} //1
//         //     );
//         // this.setState( // 1
//         //     (state) => ({counter: state.counter + action}) //2
//         // )
//         // console.log(this.state.counter)
//     }

//     // componentWillMount() {
//     //     console.log("Counter -> componentWillMount")  
//     // }

//     componentDidMount() {
//         console.log("Counter -> componentDidMount")  
//     }

//     // componentWillUpdate() {
//     //     console.log("Counter -> componentWillUpdate")  
//     // }

//     componentDidUpdate() {
//         console.log("Counter -> componentDidUpdate")  
//     }

//     componentWillUnmount() {
//         console.log("Counter -> componentWillUnmount")  
//     }

//     render() {
//         const {props: {counter}, handleClick} = this;
//         // counter = this.state.counter
//         // counter = this.props.counter
//         return (
//             <p>
//                 <button data-action="-1" onClick={handleClick}>-1</button>
//                 {counter}
//                 <button data-action="1" onClick={handleClick}>+1</button>
//             </p>
//         )
//     }
// }

export const CounterFunc = ({counter, handleCounter}) => {

    const handleClick = (event) => {
        const action = Number(event.currentTarget.dataset.action);
        handleCounter(action);
    }

    return (
        <p>
            <button data-action="-1" onClick={handleClick}>-1</button>
            {counter}
            <button data-action="1" onClick={handleClick}>+1</button>
        </p>
    )
}