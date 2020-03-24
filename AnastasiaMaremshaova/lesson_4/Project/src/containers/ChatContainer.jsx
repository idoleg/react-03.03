import React, { Component } from 'react';
import { Chat } from '../components/Chat/Chat';

export const ROBOT = 'Robot';

export class ChatContainer extends Component {
    state = {
        chats: {
            1: {
                name: 'Chat 1', 
                messages: [
                    { name: "Ivan", content: "Hello, Petr!" },
                    { name: "Petr", content: "Hello, Ivan" },
                    { name: "Ivan", content: "How are you?" },
                ]
            },
            2: {
                name: 'Chat 2', 
                messages: [
                    { name: "Maria", content: "Hello, Petr!" },
                    { name: "Petr", content: "Hello, Maria" },
                    { name: "Maria", content: "How are you?" },
                ]
            },

            3: {
                name: 'Chat 3', 
                messages: []
            }
        }
    };
    timeoutId = null; 

    handleRobotAnswer = () => {
        const {id} = this.props.match.params;

        if (id && this.state.chats[id]){
        const currentMessages = this.state.chats[id].messages; 
        const lastMessage = currentMessages[currentMessages.length - 1];

        if ( lastMessage && lastMessage.name != ROBOT)  {

            //clearTimeout(this.timeoutId);
            this.handleSendMessage(id)({
                name: ROBOT,
                content: `Hello ${lastMessage.name}, I'm Robot!`,
            });
        }
    }
}

    handleSendMessage = (id)=>(message) => {
        this.setState((state) => ({
            chats: {...state.chats, [id] : {name: state.chats[id].name, messages: [...state.chats[id].messages, message] }}, 
        }), this.handleRobotAnswer);
    }

    render() {
        const {id} = this.props.match.params;
        console.log(id); 
        const messages = id && this.state.chats[id] ? this.state.chats[id].messages: undefined;  
        console.log(messages); 
        return <Chat messages={messages} onSendMessage={this.handleSendMessage(id)}/>;
    }
}