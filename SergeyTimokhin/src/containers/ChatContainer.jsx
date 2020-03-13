import React, {Component} from 'react';
import {Chat} from '../components/Chat/Chat';

export class ChatContainer extends Component {
    state = {
        messages: [
            {name: "Boby", content: "Hello, World!"},
            {name: "Dilan", content: "Hello, how are you?"},
            {name: "Boby", content: "I'm good, thanks"},
            ]
    }

    handleSendMessage = (message) => {
        this.setState((state) => ({
            messages: [...state.messages, message]
        }));
    }

    render() {
        return <Chat messages={this.state.messages} onSendMessage={this.state.handleSendMessage} />;
    }
}
