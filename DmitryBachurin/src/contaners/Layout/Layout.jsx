import React from "react";
import { Header } from '~/components/Header/Header';
import { ChatList } from '~/components/ChatList/ChatList';
import { MessageField } from '~/contaners/MessageField/MessageField';
import './Layout.scss';


export class Layout extends React.Component {
    // state = {
    //     title: 'Чат на React',
    //     contacts: [
    //         { name: 'Иван' },
    //         { name: 'Олег' },
    //         { name: 'Дмитрий' },
    //         { name: 'Михаил' },
    //         { name: 'Анастасия' },
    //     ]
    // }

    state = {
        chats: [
            { id: 1, title: 'Чат 1', messagesArray: [1, 2, 3] },
            { id: 2, title: 'Чат 2', messagesArray: [4, 5, 6] },
            { id: 3, title: 'Чат 3', messagesArray: [7, 8, 9] },

        ],
        messages: [
            { id: 1, name: "Ivan", content: "Привет в чате 1" },
            { id: 2, name: "Petr", content: "И тебе привет в чате 1" },
            { id: 3, name: "Ivan", content: "Отлично!" },
            { id: 4, name: "Ivan", content: "Привет в чате 2" },
            { id: 5, name: "Petr", content: "И тебе привет в чате 3" },
            { id: 6, name: "Ivan", content: "Отлично!" },
            { id: 7, name: "Ivan", content: "Привет в чате 3" },
            { id: 8, name: "Petr", content: "И тебе привет в чате 3" },
            { id: 9, name: "Ivan", content: "Отлично!" },
        ],
    }
    title = 'Выберите чат';
    chatId = undefined;
    
    getChatById = (id) => {
        return this.state.chats.find((elem) => {
            if (elem.id == id) {
                return elem;
            }
        });
    }
    getMessageById = (id) => {
        return this.state.messages.find((elem) => {
            if (elem.id == id) {
                return elem;
            }
        });
    }
    getMessagesList = (chatId) => {
        const chat = this.getChatById(chatId);
        // console.log(chat);
        if (chat === undefined) {
            return;
        }
        return chat.messagesArray.map((item) => this.getMessageById(item));
    }

     
render() {
    let {chatId, title} = this;
    const {getChatById} = this;
    const {chats} = this.state;

    if (chatId === undefined) {
        chatId = this.props.match.params.id;

     }
 
     if (!(getChatById(chatId) === undefined)) {
         title = getChatById(chatId).title;
     }

    return (
        <>
            <Header title={title} />
            <div className="main">
                <ChatList chats={chats} />
                <MessageField />
            </div>

        </>
    )
}
    

}