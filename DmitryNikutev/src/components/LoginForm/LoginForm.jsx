import React, {useEffect, useRef} from 'react';
import {enterKeyToSubmit, useInput} from "../../utils/InputUtil";
import {Link} from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import CheckIcon from "@material-ui/icons/Check";

import "./LoginForm.css";
import Button from "@material-ui/core/Button";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ListItem from "@material-ui/core/ListItem";


export const LoginForm = ({username, setUsername}) => {
   const [loginInput, setLoginInput] = useInput("");

   const submitForm = () => {
      const trimmedInput = loginInput.trim();
      if (trimmedInput)
         setUsername(trimmedInput);
      setLoginInput(null);
   };

   return (
      <>
         <form className="LoginForm">
            <TextField
               label="Enter your username"
               variant="outlined"
               className="LoginField"
               autoFocus
               value={loginInput}
               onChange={setLoginInput}
               onKeyPress={(ev) => enterKeyToSubmit(ev, submitForm)}/>

            <Fab
               color="primary"
               className="SendButton"
               onClick={submitForm}>
               <CheckIcon/>
            </Fab>
         </form>

         <Link to="/" className="BackLink">
            <Button
               variant="outlined"
               onClick={() => {}}
               startIcon={<ArrowLeftIcon />}>
               Back
            </Button>
         </Link>
      </>
   )
};
