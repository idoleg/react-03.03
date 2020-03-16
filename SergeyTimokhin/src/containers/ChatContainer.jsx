import React, {Component} from 'react';
import {Chat} from '../components/Chat/Chat';

export const bot = 'Bot'

export class ChatContainer extends Component {
    state = {
        messages: [
            {name: "Boby", content: "Hello, World!"},
            {name: "Dilan", content: "Hello, how are you?"},
            {name: "Boby", content: "I'm good, thanks"},
            ]
    }

    componentDidUpdate() {
        const lastMessage = this.state.messages[this.state.messages.length - 1];

        if (lastMessage.name !== bot) {
            setTimeout(()=> {
                this.handleSendMessage({
                    name: 'Bot',
                    content: `Hello ${lastMessage.name}, it's bot`
                })
            }, 700)
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
