import React from 'react';
import {Router} from '~/components/Router';

export class App extends React.Component {
    state = {
        chats: [
           { id:1, title: 'Чат 1', messagesArray:[1,2,3]},
           { id:2, title: 'Чат 2', messagesArray:[4,5,6]},
           { id:3, title: 'Чат 3', messagesArray:[7,8,9]},
 
        ],
        messages: [
            {id:1, name: "Ivan", content: "Привет в чате 1" },
            {id:2, name: "Petr", content: "И тебе привет в чате 1" },
            {id:3, name: "Ivan", content: "Отлично!" },
            {id:4, name: "Ivan", content: "Привет в чате 2" },
            {id:5, name: "Petr", content: "И тебе привет в чате 3" },
            {id:6, name: "Ivan", content: "Отлично!" },
            {id:7, name: "Ivan", content: "Привет в чате 3" },
            {id:8, name: "Petr", content: "И тебе привет в чате 3" },
            {id:9, name: "Ivan", content: "Отлично!" },
        ],     
    }
    render() {
        return (
            <>
            <Router chats={this.chats} messages={this.messages}/>
            </>
            
        )
    }
}