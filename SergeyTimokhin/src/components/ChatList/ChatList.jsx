import React, {useState} from 'react';
import {ChatListItem} from '../ChatListItem/ChatListItem';
import List from '@material-ui/core/List';

import './ChatList.css';

export const ChatList = () => {
    const [chatsList, setChats] = useState([
        {chatLink: "/chats/1", chatAvatar: '../../../img/ava1.jpg', chatTitle: 'Family', messageSender: 'Mom', lastMessage: " Don't forget about the dinner tonight!"},
        {chatLink: "/chats/2", chatAvatar: '../../../img/ava3.jpg', chatTitle: 'Work', messageSender: 'Dilan', lastMessage: " Of course! See ya on Sunday"},
        {chatLink: "/chats/3", chatAvatar: '../../../img/ava2.jpg', chatTitle: 'Friends', messageSender: 'Jennifer', lastMessage: " Wish I could come, but I'm out of town this…"},
        {chatLink: "/chats/4", chatAvatar: '', chatTitle: 'T', messageSender: 'Test', lastMessage: "Last"},
    ]);

    return (
        <List className ="chatList">
            {chatsList.map((item, index) =>
            <ChatListItem chatLink = {item.chatLink}
            chatAvatar = {item.chatAvatar}
            chatTitle = {item.chatTitle}
            messageSender = {item.messageSender}
            lastMessage = {item.lastMessage}
            key={++index}
            />)}
        </List>
    )
}
