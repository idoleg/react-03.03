import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography } from '@material-ui/core';

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
    cursor: 'pointer'
  }
}));

export const ChatList = () => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <Link to="/chats/1">
        <ListItem className={classes.listItem} alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
      </Link>
      <Divider variant="inset" component="li" />
      <Link to="/chats/2">
        <ListItem className={classes.listItem} alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </React.Fragment>
            }
          />
        </ListItem>
      </Link>
      <Divider variant="inset" component="li" />
      <Link to="/chats/3">
        <ListItem className={classes.listItem} alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Sandra Adams
                </Typography>
                {' — Do you have Paris recommendations? Have you ever…'}
              </React.Fragment>
            }
          />
        </ListItem>
      </Link>
    </List>
  )
}