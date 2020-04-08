import React, { Component } from 'react';
import { Chat } from '../components/Chat/Chat';
export const ROBOT = 'RoboFriend';
import Grid from '@material-ui/core/Grid';

export class ChatContainer extends Component {
    state = {
        chats: {
            1: {
                name: 'Chat 1',
                messages: [
                    { name: "Ivan", text: "Hello, in chat 1!" },
                    { name: "Petr", text: "Helo, how are you?" },
                    { name: "Ivan", text: "I'm well" },
                ]
            },
            2: {
                name: 'Chat 2',
                messages: [
                    { name: "Nikola", text: "Hi" },
                    { name: "Dima", text: "It's chat 2" },
                    { name: "Nikola", text: "Ok" },
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
        
        if(id && this.state.chats[id]) {
            const currentMessages = this.state.chats[id].messages;
            const lastMessage = currentMessages[currentMessages.length - 1];
            
            if(lastMessage && lastMessage.name != ROBOT) {
                clearTimeout(this.timeoutId);
                this.timeoutId = setTimeout(() => this.handleSendMessage(id)({
                    name: ROBOT,
                    text: `Hello ${lastMessage.name}, I'm RoboFriend!`,
                }), 1000);
            }
        }
    }

    handleSendMessage = (id) => (message) => {
        this.setState((state) => ({
            chats: {
                ...state.chats,
                [id]: {
                    name: state.chats[id].name,
                    messages: [...state.chats[id].messages, message]
                }
            }   
        }), this.handleRobotAnswer);

    }

    render() {
        const {id} = this.props.match.params;
        const messages = id && this.state.chats[id] ? this.state.chats[id].messages : undefined ;


        return (<Grid container direction="column" justify="space-around" alignItems="centr"> <Chat messages={messages} onSendMessage={this.handleSendMessage(id)}/></Grid>);
    }
}