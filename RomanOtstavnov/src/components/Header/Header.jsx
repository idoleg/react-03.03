import styles from './header.scss';
import classnames from 'classnames/bind';
import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const cx = classnames.bind(styles);

export const Header = ({ items }) => {
  return (
    <AppBar position="static" className={cx('container')}>
      <Toolbar>
        <Typography variant="h6">
          Chat
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;