import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ChatListItem from '../ChatListItem';
import useStyles from './styles.js';

export default function ChatList({ chats, addNewChat }) {
  const [title, setTitle] = useState('');
  const classes = useStyles();
  
  return (
    <List className={classes.root}>
      {chats.map(([id, chat]) => (
        <ChatListItem id={id} key={id} title={chat.chatTitle} />
      ))}
      <form onSubmit={addNewChat(title)}>
        <input type="text" placeholder="Chat Name" onInput={e => setTitle(e.target.value)} />
        <button type="submit">Add new chat</button>
      </form>
    </List>
  );
}
