import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: '#fff'
  },
  link: {
    paddingRight: 15,
    paddingLeft: 15,
    textDecoration: 'none',
    '&:not(:last-child)': { borderRight: '1px #fff solid' }
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/chats/" className={classes.link}>
            <Typography variant="h6" className={classes.title}>
              Messages
            </Typography>
          </Link>
          <Link to="/profile/" className={classes.link}>
            <Typography variant="h6" className={classes.title}>
              Profile
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
