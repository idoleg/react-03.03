import React from 'react';
import {AUTH_PATH} from "../../utils/Constants";
import {Link} from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles";

import "./AppToolbar.css";


export const AppToolbar = ({username}) => {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <AppBar position="static">
            <Toolbar>
               <Typography className={classes.title} variant="h6" noWrap>
                  You are logged in as {username}
               </Typography>
               <div className={classes.login}>
                  <Link to={AUTH_PATH} className="AuthLink">{username}</Link>
               </div>
            </Toolbar>
         </AppBar>
      </div>
   );
};

const useStyles = makeStyles(theme => ({
   root: {
      flexGrow: 1,
   },
   title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
         display: 'block',
      },
   },
   login: {
      position: 'relative',
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
         marginLeft: theme.spacing(1),
         width: 'auto',
      },
   },
}));
