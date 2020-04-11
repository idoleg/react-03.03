import React from 'react';

import { Header } from '../Header/Header.jsx';
import { Chat } from '../Chat/Chat.jsx';
import { ChatList } from '../ChatList/ChatList.jsx'

import './ChatLayout.css'

export const ChatLayout = ({id, chats, defaultUser, onAddChat, onSendMessage}) => {
    const messages = id && chats[id] ? chats[id].messages : undefined ;
    const text = id && chats[id] ? `Чат ${chats[id].name}` : `Выберите чат из списка`
    return (<div className="chatcontainer">
        <Header headerText={`Welcome, ${defaultUser}! ${text}`}/>
        <ChatList chats={chats} selectedId={id} onAddChat={onAddChat} />
        <Chat messages={messages} defaultUser={defaultUser} onSendMessage={onSendMessage} />
    </div>)
}