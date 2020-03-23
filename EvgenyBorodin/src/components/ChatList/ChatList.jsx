import React from 'react';
import PropTypes from 'prop-types';
import { ChatListItem } from '../ChatListItem/ChatListItem.jsx';

import './Chatlist.css';

export const ChatList = ({chats, selectedId, onAddChat}) => {
    const onNewChat = () => {
        const name = prompt('Enter new chat name')
        onAddChat({name})
    }

    return <form className="chatlist__form">
        {Object.entries(chats).map((item, index) => <ChatListItem item={item[1]} index={item[0]} selectedId={selectedId} key={item[0]}/>)}
        <span className="chatlist__btn" onClick={onNewChat}>New chat</span>
    </form> 
}

ChatList.propTypes = {
    chats: PropTypes.object.isRequired,
    selectedId: PropTypes.string,
    onAddChat: PropTypes.func.isRequired
}