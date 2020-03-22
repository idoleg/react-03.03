import React, {useRef, useEffect} from "react";
import {useInput, enterKeyToSubmit} from "../../utils/InputUtil";

import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

import "./MessageForm.css";


export const MessageForm = ({sendMessage}) => {
   const [message, setMessage] = useInput("");

   //focus
   const textfield = useRef();
   useEffect(() => {
      textfield.current.focus();
   }, []);

   const submitForm = () => {
      const trimmedInput = message.trim();
      if (trimmedInput)
         sendMessage(trimmedInput);
      setMessage(null);
      textfield.current.focus();
   };

   return (
      <form className="InputForm">
         <TextField
            className="InputField"
            label="Type something here"
            multiline
            rows="2"
            variant="outlined"
            inputRef={textfield}
            value={message}
            onChange={setMessage}
            onKeyPress={(ev) => enterKeyToSubmit(ev, submitForm)}/>

         <Fab
            color="primary"
            className="SendButton"
            onClick={submitForm}>
            <SendIcon />
         </Fab>
      </form>
   )
};
