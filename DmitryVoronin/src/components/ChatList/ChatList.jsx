import React from 'react';
import { Link } from 'react-router-dom';

export const ChatList = () => {
    return (
        <ul>
            <li><Link to="/chats/1">Chat 1</Link></li>
            <li><Link to="/chats/2">Chat 2</Link></li>
            <li><Link to="/chats/3">Chat 3</Link></li>
            <li><Link to="/chats/4">Chat 4</Link></li>
        </ul>
    )
}