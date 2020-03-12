import React, {useRef, useEffect} from "react";
import {useInput, enterKeyToSubmit} from "../../utils/InputUtils";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

import "./Input.css";


export const Input = ({addMessage}) => {
   const [message, setMessage, resetMessage] = useInput("");
   
   //focus
   const textfield = useRef();
   useEffect(() => {
      textfield.current.focus();
   }, []);
   
   const submitForm = () => {
      const trimmedInput = message.trim();
      if (trimmedInput)
         addMessage(trimmedInput);
      resetMessage();
      textfield.current.focus();
   };
   
   return (
      <form className="InputForm">
         <TextField
            className="InputField"
            label="Type something to bot here"
            multiline
            rows="2"
            variant="outlined"
            inputRef={textfield}
            value={message}
            onChange={setMessage}
            onKeyPress={(ev) => enterKeyToSubmit(ev, submitForm)}/>
         
         <Button
            variant="contained"
            color="primary"
            className="InputButton"
            onClick={submitForm}
            endIcon={<SendIcon/>}>
            Send
         </Button>
      </form>
   )
};
