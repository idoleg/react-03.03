import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import './Header.css';
import { Link } from 'react-router-dom';


export const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Link to="/" className="header__main-link">
          <Typography variant="h6">
            ChatIk
          </Typography>
        </Link>
        <Link to="/profile" className="header__link">Account</Link>
      </Toolbar>
    </AppBar>
  )
}