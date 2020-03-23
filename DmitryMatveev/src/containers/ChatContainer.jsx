import React, { Component } from 'react';
import { Chat } from '../components/Chat/Chat';

export const ROBOT = 'RoboFriend';

export class ChatContainer extends Component {
    state = {
        messages: [
            { name: "Pall", text: "Hello, world!" },
            { name: "Bob", text: "Helo, how are you?" },
        ]
    };

    componentDidUpdate() {
        const lastMessage = this.state.messages[this.state.messages.length - 1];

        if(lastMessage.name != ROBOT) {
            setTimeout(() => this.handleSendMessage({
                name: ROBOT,
                text: `Hello ${lastMessage.name}, I'm RoboFriend!`,
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