import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import useStyles from './styles.js';

function HeaderContainer({ profile }) {
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
          <Link to="/profile/" className={classes.link}>
            <Typography variant="h6" className={classes.title}>
              Nickname: {profile.name}, Status: {profile.accountAccess}
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (store, props) => {
  const { profile } = store;

  return { profile };
};

export default connect(mapStateToProps)(HeaderContainer);
