import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import List from '@material-ui/core/List';
import ChatListItem from '../ChatListItem';
import useStyles from './styles.js';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

function ChatList({ chats, addNewChat, blinkingIds = [], push }) {
  const [title, setTitle] = useState('');
  const classes = useStyles();
  const handleNavigate = id => () => {
    push(`/chats/${id}`);
  };

  return (
    <List className={classes.root}>
      {chats.map(([id, chat]) => (
        <ChatListItem
          id={id}
          blinkings={blinkingIds.includes(id)}
          key={id}
          title={chat.chatTitle}
          handler={handleNavigate}
        />
      ))}
      <form onSubmit={addNewChat(title)}>
        <input name="name" type="text" placeholder="Chat Name" onInput={e => setTitle(e.target.value)} />
        <button type="submit">Add new chat</button>
      </form>
    </List>
  );
}

const mapStateToProps = (store, props) => {
  return { store };
};

const mapDispatchToProps = dispatch => bindActionCreators({ push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
