import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

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

export default function ChatList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start" className={classes.item}>
        <ListItemAvatar>
          <Avatar alt="Brunch this weekend?" />
        </ListItemAvatar>
        <ListItemText primary="Brunch this weekend?" secondary={'Do you have Paris recommendations? Have you ever…'} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start" className={classes.item}>
        <ListItemAvatar>
          <Avatar alt="Summer BBQ" />
        </ListItemAvatar>
        <ListItemText primary="Summer BBQ" secondary={'Do you have Paris recommendations? Have you ever…'} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start" className={classes.item}>
        <ListItemAvatar>
          <Avatar alt="Alex" />
        </ListItemAvatar>
        <ListItemText primary="Alex" secondary={'Do you have Paris recommendations? Have you ever…'} />
      </ListItem>
    </List>
  );
}
