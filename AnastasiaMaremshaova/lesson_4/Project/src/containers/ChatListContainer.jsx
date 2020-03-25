import React, { Component } from 'react';
import { ChatList } from '../components/ChatList/ChatList';
import {ChatContainer} from './ChatContainer'
import { Chat } from '../components/Chat/Chat';

export const ROBOT = 'Robot';
export class ChatListContainer extends Component {
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
        },
        countChats: 2
    };

    timeoutId = null; 

    handleRobotAnswer(){
        let id = this.props.match.params.id;
        const currentMessages = this.state.chats[id].messages; 
        const lastMessage = currentMessages[currentMessages.length - 1];
    
        if ( lastMessage && lastMessage.name != ROBOT)  {
    
            this.handleSendMessage({
                name: ROBOT,
                content: `Hello ${lastMessage.name}, I'm Robot!`,
            });
        }
    }

     createNewChat = () =>{
         //console.log(this.state.countChats)
        let id = this.state.countChats + 1;
        
    
        this.setState(function(state, props){
            return{
            chats: {...state.chats, [id] : {name: `Chat ${id}`, messages: [ {name: 'N', content: 'fff'} ] }}, countChats : id}

          })

        console.log(this.state); 
    }
    

    handleSendMessage = (message)=> {
        let id = this.props.match.params.id; 
        this.setState((state) => ({
            chats: {...state.chats, [id] : {name: state.chats[id].name, messages: [...state.chats[id].messages, message] }}, 
        }), this.handleRobotAnswer)
    }


    render(){
        //const chats = this.state.chats; 
        let id = this.props.match;  
        let chats = Object.assign(this.state.chats); 
        if (id === undefined)
            return(
                <ChatList chats={this.state.chats} createNewChat={this.createNewChat}/>
        )
        else
        {  
            let timeoutId = null; 
            id = this.props.match.params.id;
            console.log(id); 
            const messages = chats[id].messages;  
            console.log(messages); 
            
            //console.log(this.state); 
            return <Chat messages={messages} onSendMessage={this.handleSendMessage}/>;
        }
    }
}; 