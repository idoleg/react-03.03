import React, { Component } from 'react';

import {MessageField} from "./MessageField";



export class App extends Component {
   state = {
        messages: [
    {name: "Ivan", content: "Hello!"},
    {name: "Petr", content: "Hello, how are you?"},
    {name: "Ivan", content: "I`m fine"},
]
   
    }

    
addMessage =()=>{
    const newMessage = {name: "User", content: "Hello!"};
    this.setState((state) => ({messages: [...this.state.messages, newMessage]}));
    console.log(this.state.messages);
}


 componentDidUpdate () {
     const chatBotMessage = {name: "Chatbot", content: "Hello! I'm Chatbot. What can i do for you?"}; 
        if (this.state.messages[this.state.messages.length - 1].name !== chatBotMessage.name) {
            this.setState((state) => ({messages: [...this.state.messages, chatBotMessage]}));
            console.log(this.state.messages);
        }else{
    console.log(this.state.messages);}
    }


render(){
    return ( 
        <>
        <MessageField messages={this.state.messages}/>
        <p><button onClick={this.addMessage}>Написать</button></p>
        </>
    )
}
}