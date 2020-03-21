import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import useStyles from './styles.js';

export default function ChatListItem({ id, title }) {
  const classes = useStyles();
  
  return (
    <Link to={`/chats/${id}`}>
      <ListItem className={classes.item}>
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
        <ListItemText primary={title} secondary={null} />
      </ListItem>
    </Link>
  );
}
