import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  item: {
    cursor: 'pointer',
    transition: '0.3s',
    borderBottom: '1px rgba(189, 189, 189, 0.3) solid',
    '&:hover': {
      opacity: '0.7'
    }
  }
}));

export default function ChatListItem({ id, title }) {
  const classes = useStyles();

  return (
    <Link to={`/chats/${id}`}>
      <ListItem className={classes.item}>
        <ListItemAvatar>
          <Avatar>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={title} secondary={null} />
      </ListItem>
    </Link>
  );
}
