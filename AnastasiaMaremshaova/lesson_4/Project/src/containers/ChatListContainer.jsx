import React, { Component } from 'react';
import { ChatContainer } from './ChatContainer';
import { Switch, Route} from 'react-router-dom'
import { ChatList } from '../components/ChatList/ChatList';
import {IndexPage} from '../components/IndexPage/IndexPage'
import {Profile} from '../components/Profile/Profile'

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

    timeoutID = null; 

    createNewChat = () =>{
       let id = this.state.countChats + 1;
       
       this.setState(function(state, props){
           return{
           chats: {...state.chats, [id] : {name: `Chat ${id}`, messages: [ {name: '', content: ''} ] }}, countChats : id}

         })
   }

   timeoutId = null; 

   handleRobotAnswer=(id)=>{
       const currentMessages = this.state.chats[id].messages; 
       const lastMessage = currentMessages[currentMessages.length - 1];
   
       console.log(lastMessage)
       if ( lastMessage && lastMessage.name != ROBOT)  {
   
           clearTimeout(this.timeoutID); 
           this.timeoutID = setTimeout(()=>this.handleSendMessage(id)({
               name: ROBOT,
               content: `Hello ${lastMessage.name}, I'm Robot!`,
           }), 1000);
       }
   }

   handleSendMessage = (id) => (message) => {
    this.setState((state) => ({
        chats: {...state.chats, [id] : {name: state.chats[id].name, messages: [...state.chats[id].messages, message] }}, 
    }), this.handleRobotAnswer(id))
}
   render(){
       return(
        <div className="MessageField">
            <ChatList chats={this.state.chats} createNewChat={this.createNewChat}/>
            <Switch>
                <Route path= "/chats/" exact render={(props) => 
                                                    (<ChatContainer {...props} handleSendMessage={this.handleSendMessage}/>)}></Route>
                <Route path= "/chats/:id" exact render={(props) => 
                                                    (<ChatContainer {...props} state={this.state.chats} handleSendMessage={this.handleSendMessage}/>)}></Route>
                
                <Route path= "/" exact component={IndexPage}></Route>
                <Route path="/profile/" exact component={Profile}></Route>
            </Switch>
        </div>
       )
   }
};
