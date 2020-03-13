import React from 'react';
import { Message } from '../Message/Message';
import PropTypes from 'prop-types';


export const MessageList = ({ messages }) => {
    return (<ul>
        {messages.map((item, index) => <Message {...item} key={index} />)}
    </ul>)
}

MessageList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes))
};



// export class MessageList extends Component {
//     state = {
//         messages: [
//         {name: "Boby", content: "Hello, World!"},
//         {name: "Dilan", content: "Hello, how are you?"},
//         {name: "Boby", content: "I'm good, thanks"},
//         ]
//     };

//     handleClick = () => {
//         this.setState({ messages: [ ...this.state.messages, {name: "user", content: "New message!"}] });
//     };

//     componentDidUpdate() {
//         if (this.state.messages.length % 2 === 0) {
//         setTimeout(() =>
//         this.setState(
//             { messages: [ ...this.state.messages, {name: "Bot", content: "bot's message"}] }), 1000);
//         }
//     }


//     render() {
//         const messageElements = this.state.messages.map((msg, index) => (
//             <Message key={ index } name={msg.name} text={ msg.content } />));

//         return <div>
//             { messageElements }
//             <button onClick={ this.handleClick }>Send message</button>
//         </div>
//     }
// }
