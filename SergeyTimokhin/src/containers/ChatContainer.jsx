import React, {Component} from 'react';
import {Chat} from '../components/Chat/Chat';


export const bot = 'Bot'

export class ChatContainer extends Component {
    state = {
        chats: {
            1:{
                name: 'Family',
                messages:[
                    {name: "Alex", content: "Hello fam!"},
                    {name: "Dad", content: "Hello, how are you?"},
                    {name: "Mom", content: " Don't forget about the dinner tonight!"},
                ],
            },
            2:{
                name: 'Work',
                messages:[
                    {name: "Dilan", content: "Hello, World!"},
                    {name: "Andrew", content: "Hello, are you coming?"},
                    {name: "Dilan", content: " Of course! See ya on Sunday"},
                ],
            },
            3:{
                name: 'Friends',
                messages:[
                    // {name: "Boby", content: "Hello, World!"},
                    // {name: "Scott", content: "Hello, are you coming?"},
                    // {name: "Jennifer", content: " Wish I could come, but I'm out of town this weekend"},
                ],
            },
        }
    }

    timerId = null;

    componentDidUpdate() {
        const {id} = this.props.match.params;
        const currentMessages = this.state.chats[id].messages;
        const lastMessage = currentMessages[currentMessages.length - 1];

        if (lastMessage.name !== bot) {
            clearTimeout(this.timerId);
            this.timerId = setTimeout(() => {
                this.handleSendMessage(id)({
                    name: 'Bot',
                    content: `Hello ${lastMessage.name}, it's bot`
                })
            }, 2000);
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
        }));
    }

    render() {
        const {id} = this.props.match.params;
        // const {messages} = this.state.chats[id];
        const messages = id && this.state.chats[id] ? this.state.chats[id].messages : undefined;


        return <Chat messages={messages} onSendMessage={this.handleSendMessage(id)}/>;
    }
}
