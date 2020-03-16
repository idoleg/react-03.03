import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Message } from '../Message/Message';

// export default class MessageList extends Component {
//   state = {
//     messages: [
//       {name: "Ivan", content: "Hello, world"},
//       {name: "Petr", content: "Hello, how are you?"},
//       {name: "Ivan", content: "I'm well"}
//     ]
//   };
//
//   handleClick = () => {
//     this.setState({messages: [...this.state.messages, {name: "John", content: "Hi!"}]});
//   };
//
//   componentDidUpdate() {
//     const lastName = this.state.messages[this.state.messages.length - 1].name;
//     if(lastName !== "Robot") {
//       setTimeout(() =>
//       this.setState(
//         {messages: [...this.state.messages, {name: "Robot", content: lastName + ", don't bother me, I'm a robot"}]}
//       ), 1000);
//     }
//   };
//
//   render() {
//     const messageElement = this.state.messages.map((item, index) => (<Message {...item} key={index}/>));
//
//     return (<ul>
//       {messageElement}
//       <button onClick={this.handleClick}>Send message</button>
//     </ul>);
//   }
// }

export const MessageList = ({messages}) => {
  return(<ul>
    {messages.map((item, index) => (<Message {...item} key={index} />))}
  </ul>)
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes))
}
