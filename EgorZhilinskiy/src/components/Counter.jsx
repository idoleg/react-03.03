import React, { Component,Fragment } from 'react';

export class Counter extends Component {
    // state = {
    //     counter:1,
    // };
    // constructor (props) {
    //     super(props);    

    // this.handleClick = this.handleClick.bind(this)
    // }

    handleClick = (event) => {
        const action = Number(event.currentTarget.dataset.action);

        this.props.handleCounter(action);

        // setTimeout(() => this.setState({counter: ++this.state.counter}), 0)
        // this.setState({counter: ++this.state.counter});
        // this.setState(
        //     (state) =>({counter: state.counter + action}))
        //console.log(this.state.counter)
    }

    componentDidMount() {
        console.log("Counter -> componentDidMount")
    }
   
    componentDidUpdate() {
        console.log("Counter -> componentDidUpdate")
    }
    
    componentWillUnmount() {
        console.log("Counter -> componentWillUnmount")
    }
    render() {
        const {props: {counter}, handleClick} = this;
        return (
            <p> 
                <button data-action = "-1" onClick = {handleClick}>-1</button>
                {counter}
                <button data-action = "1" onClick = {handleClick}>+1</button>
            </p>
        )
    }

}
// const Test = 'Test iimport';
// export const Content = Test;
// export {Test};
// export default Test;
