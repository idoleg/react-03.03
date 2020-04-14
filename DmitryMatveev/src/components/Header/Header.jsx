import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,

  },
}));

export function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" ><Link to="/chats" style={{color: 'white'}}> chats </Link></Button>
          <Typography variant="h4" className={classes.title} >
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >RoboChat</Grid>
          </Typography>
          <Button color="inherit"> <Link to="/profile" style={{color: 'white'}}>Profile</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
} 

