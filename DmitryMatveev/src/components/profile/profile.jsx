import React from "react";
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

function Profile()  {
  const classes = useStyles();
      return (
        <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.large}>
              P
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Pall' secondary='1 day ago' />
        </ListItem>
      </List>
      );
}
export default Profile;