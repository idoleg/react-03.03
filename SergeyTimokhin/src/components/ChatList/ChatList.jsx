import React from 'react';
import {ChatListItem} from '../ChatListItem/ChatListItem';
import List from '@material-ui/core/List';
import {useInput} from '../../hooks/useInput'




import './ChatList.css';

export const ChatList = ({chats, createChat}) => {
    const [name, setName, setNameState] = useInput('');

    const handleAddChat = (event) => {
        event.preventDefault();
        createChat(name);
        setNameState('');
    }

    return (
        <List className ="chatList">
        {chats.map(({id, name, messages, avatar}) =>
        <ChatListItem chatLink = {"/chats/" + id}
        chatAvatar = {avatar}
        chatTitle = {name}
        messageSender = {messages.length ? messages[messages.length - 1].name : ""}
        lastMessage = {messages.length ? messages[messages.length - 1].content : "No messages"}
        key={id}
        />)}
        <li>
            <form onSubmit={handleAddChat}>
                <input value={name} onChange={setName} />
                <button>Add Chat</button>
            </form>
        </li>
    </List>
    )
}
