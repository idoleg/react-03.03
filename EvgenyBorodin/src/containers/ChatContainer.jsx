import React, { Component } from 'react';
import { Chat } from '../components/Chat/Chat.jsx';
import { ChatList } from '../components/ChatList/ChatList.jsx'
import {Link} from 'react-router-dom';

import './ChatContainer.css'

export const ROBOT = 'Robot'

export class ChatContainer extends Component {
    state = {
        chats: {
            1: {
                name: "IT Group",
                messages: [
                    { user: "Ivan", text: "Hello, world!" },
                    { user: "Petr", text: "Helo, how are you?" },
                    { user: "Ivan", text: "I'm well" }
                ]
            },
            2: {
                name: "Bot Group",
                messages: [
                    { user: "Bot 1", text: "Hello, bots!" },
                    { user: "Bot 2", text: "Get out of here, bot!" },
                    { user: "Bot 3", text: "No bots allowed in this chat, ha-ha-ha!" }
                ]
            },
            3: {
                name: "Never read this",
                messages: [
                    { user: "sss", text: "Whoa!" },
                    { user: "qqq", text: "Oops!" },
                    { user: "www", text: "Yep." }
                ]
            },
        },
        timeoutID: null
    }

    handleRobotAnswer = () => {
        const {id} = this.props.match.params;
        
        if(id && this.state.chats[id]) {
            const currentMessages = this.state.chats[id].messages;
            const lastMessage = currentMessages[currentMessages.length - 1];
            
            if(lastMessage && lastMessage.user != ROBOT) {
                clearTimeout(this.timeoutId);
                this.timeoutId = setTimeout(() => this.handleSendMessage(id)({
                    user: ROBOT,
                    text: `Hello ${lastMessage.user}! Robot is busy, it will answer soon...`,
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

    handleNewChat = () => {
        
        const name = prompt('Enter chat name')
        const newId = Object.keys(this.state.chats).length + 1
        this.setState((state) => ({
            chats: {
                ...state.chats,
                [newId]: {
                    name,
                    messages: []
                }
            }
        }))
        debugger
    }

    render() {
        const {id} = this.props.match.params;
        const messages = id && this.state.chats[id] ? this.state.chats[id].messages : undefined ;
        const headerText = id && this.state.chats[id] ? `Чат ${this.state.chats[id].name}` : `Выберите чат из списка`

        return (
        <div className="chatcontainer">
            <nav>
                <Link to="/profile">Edit the profile</Link>
                <Link to="/">Main page</Link>
                <Link to="/about">About...</Link>
            </nav>
            <header className="header">
                {headerText}
            </header>
            <ChatList chats={this.state.chats} selectedId={id} onNewChat={this.handleNewChat}/>
            <Chat messages={messages} onSendMessage={this.handleSendMessage(id)}/>
        </div>)
    }
}