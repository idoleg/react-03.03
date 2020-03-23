import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ChatListItem from '../ChatListItem/ChatListItem';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  item: {
    cursor: 'pointer',
    transition: '0.3s',
    '&:hover': {
      opacity: '0.7'
    }
  }
}));

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
