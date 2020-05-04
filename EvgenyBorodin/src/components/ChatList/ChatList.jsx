import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classname';

import { ChatListItem } from '../ChatListItem/ChatListItem.jsx';
import useInput from '../../hooks/useInput.js'

import './Chatlist.css';

export const ChatList = ({isLoading, error, chats, addChat, renameChat, deleteChat}) => {
    // console.log(chats)
    const onNewChat = () => {
        const newChatName = prompt('Enter new chat name')
        addChat(newChatName)
    }

    const onRenameChat = (event) => {
        event.preventDefault()
        const id = event.target.dataset.id
        const newName = prompt(`Enter new name for ${chats[id-1].name}`)
        renameChat(id, newName)
    }

    const onDeleteChat = (event) => {
        event.preventDefault()
        const id = event.target.dataset.id
        deleteChat(id)
    }

    if (isLoading) {
        return <strong>List is loading...</strong>
    }

    if (error) {
        return <strong>Something went wrong...</strong>
    }

    const find = chats.find(elem => elem.selected)

    const className = classname("chatlist__form", { "chat-is-selected" : find !== undefined });

    return <form className={className}>
        {chats.map(({id, name, fire, selected}) => (
            <span className="chatlist__item" key={id}>
                <ChatListItem item={name} index={id} fire={fire} selected={selected} key={id}/>
                <button className="chatlist__item__edit" data-id={id} onClick={onRenameChat}>&hellip;</button>
                <button className="chatlist__item__delete" data-id={id} onClick={onDeleteChat}>&times;</button>
            </span>
        ))}
        <span className="chatlist__btn" onClick={onNewChat}>New chat</span>
    </form> 
}

ChatList.propTypes = {
    isLoading: PropTypes.bool, 
    error: PropTypes.string, 
    chats: PropTypes.array.isRequired,
    addChat: PropTypes.func.isRequired,
    renameChat: PropTypes.func.isRequired, 
    deleteChat: PropTypes.func.isRequired,
}