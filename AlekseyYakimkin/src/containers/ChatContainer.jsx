import React, {Component} from 'react';
import { Chat } from '../components/Chat/Chat'

export class ChatContainer extends Component {
    state = {
        messages:[
            { name: "Ivan", content: "Hello, world!" },
            { name: "Petr", content: "Helo, how are you?" },
            { name: "Ivan", content: "I'm well" },
        ]
    }

    handleSendMessage = (message) => {
        this.setState((state) => ({
            messages:[...state.messages, message]
        }))
    }

    render() {
        return <Chat messages={this.state.messages} onSendMessage={this.handleSendMessage}/>
    }
}