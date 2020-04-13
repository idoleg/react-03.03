import React from 'react';
import {AUTH_PATH, ERROR, FETCHING, SUCCESS} from "../../utils/Constants";
import {Link} from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

import "./AppToolbar.css";
import {CircularProgress} from "@material-ui/core";


export const AppToolbar = ({username, loadingState}) => {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <AppBar position="static">
            <Toolbar>
               {loadingState === FETCHING &&
                  <CircularProgress color="secondary"/>
               }

               {loadingState === ERROR &&
               "Error loading user info"
               }

               {loadingState === SUCCESS && <>
                  <Typography className={classes.title} variant="h6" noWrap>
                     You are logged in as {username}
                  </Typography>
                  <div className={classes.login}>
                     <Link to={AUTH_PATH} className="AuthLink">{username}</Link>
                  </div>
               </>}
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
