import styles from './header.scss';
import classnames from 'classnames/bind';
import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {NavLink} from "react-router-dom";
import Box from "@material-ui/core/Box";
import {connect} from "react-redux";

const cx = classnames.bind(styles);

const Header = ({ name }) => {
  return (
    <AppBar position="static" className={cx('container')}>
      <Toolbar>
        <Typography variant="h5">
          <NavLink to="/">ReaChat</NavLink>
        </Typography>
        <Box ml={6} mr={2} className={cx('navigation')}>
          <NavLink to="/" exact activeClassName={cx('active')} className={cx('link')}>Home</NavLink>
          <NavLink to="/chats" activeClassName={cx('active')} className={cx('link')}>Chats</NavLink>
          <NavLink to="/profile" activeClassName={cx('active')} className={cx('link')}>Profile</NavLink>
        </Box>
        <Typography variant='h6'>
          {name}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = ({profile}) => ({...profile});

export default connect(mapStateToProps)(Header);

