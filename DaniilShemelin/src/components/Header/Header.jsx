import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import './Header.css';


export const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          ChatIk
        </Typography>
        <Button  className="header__login" color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}