import React from 'react';
import {enterKeyToSubmit, useInput} from "../../utils/InputUtils";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import CheckIcon from "@material-ui/icons/Check";
import {fade, makeStyles} from "@material-ui/core/styles";


export const Login = ({username, updateUsername}) => {
   const classes = useStyles();
   const [inputUsername, setInputUsername] = useInput(username);

   const submitForm = () => {
      const trimmedInput = inputUsername.trim();
      if (trimmedInput)
         updateUsername(trimmedInput);
   };
   
   return (
      <div className={classes.root}>
         <AppBar position="static">
            <Toolbar>
               <Typography className={classes.title} variant="h6" noWrap>
                  You are logged in as {username}
               </Typography>
               <div className={classes.login}>
                  <div className={classes.loginIcon}>
                     <PermIdentityIcon/>
                  </div>
                  <InputBase
                     placeholder="Log in"
                     classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                     }}
                     value={inputUsername}
                     onChange={setInputUsername}
                     onKeyPress={(ev) => enterKeyToSubmit(ev, submitForm)}
                  />
                  <IconButton
                     className={classes.saveButton}
                     color="inherit"
                     onClick={submitForm}
                  >
                     <CheckIcon/>
                  </IconButton>
               </div>
            </Toolbar>
         </AppBar>
      </div>
   );
};

// styles are stored this way because they are copypasted and too complex to convert to css
// this component will be rebuilt from scratch anyway
const useStyles = makeStyles(theme => ({
   root: {
      flexGrow: 1,
   },
   saveButton: {
      marginRight: theme.spacing(1),
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
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
         backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
         marginLeft: theme.spacing(1),
         width: 'auto',
      },
   },
   loginIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },
   inputRoot: {
      color: 'inherit',
   },
   inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
         width: 120,
         '&:focus': {
            width: 200,
         },
      },
   },
}));
