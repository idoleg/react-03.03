import React from 'react';
import PropTypes from 'prop-types';
import { ChatListItem } from '../ChatListItem/ChatListItem.jsx';

import './Chatlist.css';

export const ChatList = ({chats, addChat}) => {
    // console.log(chats)
    const onNewChat = () => {
        const newChatName = prompt('Enter new chat name')
        addChat(newChatName)
    }

    return <form className="chatlist__form">
        {chats.map(({id, name, fire, selected}) => <ChatListItem item={name} index={id} fire={fire} selected={selected} key={id}/>)}
        <span className="chatlist__btn" onClick={onNewChat}>New chat</span>
    </form> 
}

ChatList.propTypes = {
    chats: PropTypes.array.isRequired,
    addChat: PropTypes.func.isRequired
}