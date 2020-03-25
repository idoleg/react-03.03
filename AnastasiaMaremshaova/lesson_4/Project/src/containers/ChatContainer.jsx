import React, { Component } from 'react';
import { Chat } from '../components/Chat/Chat';
import {ChatListContainer} from './ChatListContainer'

export const ROBOT = 'Robot';

export class ChatContainer extends Component{
    
    timeoutId = null; 

    handleRobotAnswer(){
   
        if (this.props.id && this.props.chats[this.props.id]){
        const currentMessages = this.props.chats[this.props.id].messages; 
        const lastMessage = currentMessages[currentMessages.length - 1];
    
        if ( lastMessage && lastMessage.name != ROBOT)  {
    
            this.handleSendMessage()({
                name: ROBOT,
                content: `Hello ${lastMessage.name}, I'm Robot!`,
            });
        }
    }
    }

    handleSendMessage = (message)=> {
        console.log(message); 
        this.setState(() => ({
            chats: {...this.props.chats, [this.props.id] : {name: this.props.chats[this.props.id].name, messages: [...this.props.chats[this.props.id].messages, message] }}, 
        }))
    }

    render() {

        //let timeoutId = null; 
        const messages = this.props.id && this.props.chats ? this.props.chats[this.props.id].messages: undefined;  
        console.log(messages); 
        
        return <Chat messages={messages} onSendMessage={this.handleSendMessage}/>;
    }
}

