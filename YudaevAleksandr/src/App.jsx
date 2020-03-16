import React, {Component} from 'react';
import {ChatContainer} from "./containers/ChatContainer";

export const App = () => {
    return <ChatContainer />
};

// export default class App extends Component{
//     state = {
//         messages: [
//             {name: "RobotAlex", content: "Hello!"},
//             {name: "Me", content: "Hi, how are you?"},
//             {name: "RobotAlex", content: "I am well! And you?"},
//             {name: "Me", content: "Me too"},
//         ],
//         input: '',
//         textFieldDisabled:false
//     };
//
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         if (this.state.messages[this.state.messages.length - 1].name !== "RobotAlex" &&
//             prevState.messages.length !== this.state.messages.length){
//             setTimeout(() => {
//                 let message = {name: "RobotAlex", content: "Stupid robot message"};
//                 this.setState(() => ({
//                     messages: [...this.state.messages, message],
//                     textFieldDisabled: false
//                 }));
//             }, 2000);
//         }
//     }
//
//     handleChange = (event) => {
//         this.setState({input: event.target.value });
//     };
//
//     sendMessage = (message) => {
//         if (this.state.input !== '') {
//             this.setState({
//                 messages: [...this.state.messages, {name: 'Me', content: message}],
//                 input: '',
//                 textFieldDisabled: true
//             });
//         }
//     };
//
//     handleKeyUp = (event, message) => {
//         console.log(123);
//         if (event.keyCode === 13 && event.ctrlKey) { // ctrl + Enter
//             //this.sendMessage(message);
//             console.log('test')
//         }
//     };
//
//     render() {
//         return(
//             <div style={{display: 'flex'}}>
//                 <CssBaseline />
//                 <Header />
//                 <ChatList />
//                 <MessageField messages={this.state.messages} handleKeyUp={this.handleKeyUp}/>
//
//             </div>
//         )
//     }
// }