import React, { Component } from 'react';
import { Message } from '../Message/Message'


export class MessageList extends Component {
    state = {
        // messages: ["Hey", "What's up?"]
        messages: [
        {name: "Boby", content: "Hello, World!"},
        {name: "Dilan", content: "Hello, how are you?"},
        {name: "Boby", content: "I'm good, thanks"},
        ]
    };

    handleClick = () => {
        this.setState({ messages: [ ...this.state.messages, {name: "user", content: "New message!"}] });
    };

    componentDidUpdate() {
        if (this.state.messages.length % 2 === 0) {
        setTimeout(() =>
        this.setState(
            { messages: [ ...this.state.messages, {name: "Bot", content: "bot's message"}] }), 1000);
        }
    }


    render() {
        const messageElements = this.state.messages.map((msg, index) => (
            <Message key={ index } name={msg.name} text={ msg.content } />));

        return <div>
            { messageElements }
            <button onClick={ this.handleClick }>Send message</button>
        </div>
    }
}




    // const MessageList = ({ messages }) => {
    //     return (<ul>
    //         {messages.map((item, index) => <Message {...item} key={index} />)}
    //     </ul>)
    // }
