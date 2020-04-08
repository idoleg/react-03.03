import React from 'react';
import { Link } from 'react-router-dom';
import { useInput } from '../../hooks/useInput';
import { makeStyles, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 30,
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  listItem: {
    alignItems: 'center'
  }
}));

export const ChatList = ({ chats, addChat }) => {
  const classes = useStyles();
  const [name, setName, setNameState] = useInput('');
  const handleAddChat = (event) => {
    event.preventDefault();
    addChat(name);
    setNameState('');
  }

  return (
    <List className={classes.root}>

      { chats.map(({id, name}) => {
          return (
            <Link key={id} to={`/chats/${id}`}>
              <ListItem className={classes.listItem}>
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <ListItemText
                  primary={name}
                />
              </ListItem>
            </Link>
          )
        })
      }
      <ListItem className={classes.listItem}>
        <form onSubmit={handleAddChat}>
          <input type="text" placeholder="Chat name" value={name} onChange={setName} />
          <button>Create chat</button>
        </form>
      </ListItem>
    </List>
  )
}