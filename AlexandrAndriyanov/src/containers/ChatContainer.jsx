import React, { Component } from 'react';
import {Chat} from '../components/chat/chat'
export const Chatbot = "Chatbot";
export class ChatContainer extends Component {
 state = {
     chats: {
         1: {
             name: 'Chat 1',
               messages: [
                   {name: "Ivan1", content: "Hello!"},
                   {name: "Petr1", content: "Hello, how are you?"},
                   {name: "Ivan1", content: "I`m fine"},
                    ]
         },
          2: {
             name: 'Chat 2',
               messages: [
                   {name: "Ivan2", content: "Hello!"},
                   {name: "Petr2", content: "Hello, how are you?"},
                   {name: "Ivan2", content: "I`m fine"},
                    ]
         },
          3: {
             name: 'Chat 3',
               messages: []
         },
     }
     
      
   
 }
timeoutId = null;

handleRobotAnswer = () => {
    const {id} = this.props.match.params;
    if(id && this.state.chats[id]) {
        const currentMessages = this.state.chats[id].messages;
        const lastMessage = currentMessages[currentMessages.length - 1];
        
        if (lastMessage && lastMessage.name !== Chatbot ){
         clearTimeout(this.timeoutId);
         this.timeoutId = setTimeout(() => this.handleSendMessage(id)(
             {name: Chatbot, content: `Hello ${lastMessage.name}! I'm Chatbot, what can i do for you?`,}), 1000); 
    } 
    }
 
 }

handleSendMessage =(id) => (message) => {
    this.setState((state) => ({
        chats: {
            ...state.chats,
            [id]: {
                name: state.chats[id].name,
                messages: [ ...state.chats[id].messages, message]
            }
        }
        //messages: [...state.messages, message]
    }), this.handleRobotAnswer);
}
    render(){
        const {id} = this.props.match.params;
        const messages = id && this.state.chats[id] ? this.state.chats[id].messages : undefined ;
        
        return <Chat messages={messages} onSendMessage = {this.handleSendMessage(id)}/>;
    }
   
}