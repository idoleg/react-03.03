import React, { Component } from 'react';
import {Chat} from '../components/chat/chat.jsx'

export const Chatbot = "Chatbot";
export class ChatContainer extends Component {
 state = {
        messages: [
    {name: "Ivan", content: "Hello!"},
    {name: "Petr", content: "Hello, how are you?"},
    {name: "Ivan", content: "I`m fine"},
        ]
   
 }
timeoutId = null;

componentDidUpdate () {
    /* const chatBotMessage = {name: "Chatbot", content: "Hello! I'm Chatbot. What can i do for you?"}; 
        if (this.state.messages[this.state.messages.length - 1].name !== chatBotMessage.name) {
            //this.setState((state) => ({messages: [...this.state.messages, chatBotMessage]}));
            this.handleSendMessage(chatBotMessage);
            console.log(this.state.messages);
        }else{
    console.log(this.state.messages);}*/
    
    
    const lastMessage = this.state.messages[this.state.messages.length - 1];
     if (this.state.messages[this.state.messages.length - 1].name !== Chatbot ){
         clearTimeout(this.timeoutId);
         this.timeoutId = setTimeout(() => this.handleSendMessage(
             {name: Chatbot, content: `Hello ${lastMessage.name}! I'm Chatbot, what can i do for you?`,}), 1000); 
     }
    }

handleSendMessage = (message) => {
    this.setState((state) => ({
        messages: [...state.messages, message]
    }));
}
    render(){
        return <Chat messages={this.state.messages} onSendMessage = {this.handleSendMessage}/>;
    }
   
}