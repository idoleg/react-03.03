import React, { Component } from 'react';
import { Chat } from '../components/Chat/Chat';

export const ROBOT = 'Robot';

export class ChatContainer extends Component{
    state = {
        messages: [
            { name: "Ivan", content: "Hello, world!" },
            { name: "Petr", content: "Helo, how are you?" },
            { name: "Ivan", content: "I'm well" },
        ]
    };
    timeoutId = null; 

    componentDidUpdate() {
        const lastMessage = this.state.messages[this.state.messages.length - 1];

        if ((lastMessage.name != ROBOT) ) {

            clearTimeout(this.timeoutId);
            this.timeoutId = this.setTimeout(() => this.handleSendMessage({
                name: ROBOT,
                content: `Hello ${lastMessage.name}, I'm Robot!`,
            }), 1000);
        }
    }

    handleSendMessage = (message) => {
        this.setState((state) => ({
            messages: [...state.messages, message]
        }));
    }

    render() {

        return <Chat messages={this.state.messages} onSendMessage={this.handleSendMessage}/>;
    }
}