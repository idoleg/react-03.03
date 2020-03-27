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
            { id: 5, name: "Petr", content: "И тебе привет в чате 2" },
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
        let chat = this.getChatById(chatId);
        // console.log(chat);
        if (chat === undefined) {
            // chat = this.getChatById(1);
            return;
        }
        return chat.messagesArray.map((item) => this.getMessageById(item));
    }


    // timeoutId = null;

    onSendMessage = ({ chatId, name, content }) => {
        this.setState(
            (state) => {
                const messageId = this.state.messages.length+1;
                
                const filteredChats = this.state.chats.filter((el) => {
                    return el.id !== +chatId;
                });
                
                const updatedChat = this.getChatById(chatId);
                updatedChat.messagesArray.push(messageId);
                filteredChats.push(updatedChat);
                filteredChats.sort((a, b) => a.id > b.id ? 1 : -1);
                
                return  {chats: filteredChats, messages: [...this.state.messages, { id: messageId, name: name, content: content }] }
            }
           
        )
        console.log(this.state)
    }

    // componentDidUpdate() {
    //     const name = this.state.messages[this.state.messages.length - 1].name;
    //     if (name !== "Robot") {
    //         clearTimeout(this.timeoutId);
    //         this.timeoutId = setTimeout(() => this.addRobotAnswer(name), 1000);
    //     }
    // }

    // addRobotAnswer(name) {
    //     this.setState(
    //         (state) => ({ messages: [...this.state.messages, { name: 'Robot', content: `Уважаемый ${name}! Ваше сообщение принято.` }] })
    //     )
    // }


    render() {
        let { chatId, title } = this;
        const { getChatById, getMessagesList, onSendMessage } = this;
        const { chats } = this.state;

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
                    <MessageField chatId={chatId} messages={getMessagesList(chatId)} onSendMessage={onSendMessage} />
                </div>

            </>
        )
    }


}