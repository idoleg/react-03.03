import React, {useState, useEffect} from "react";
import {MessageList} from "../../components/MessageList/MessageList";
import {Input} from "../../components/Input/Input";

import {Card} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


export const ChatContainer = ({username}) => {
   const [messages, setMessages] = useState(INITIAL_MESSAGES);
   const [botTimer, setBotTimer] = useState(null);
   
   const classes = useStyles();
   
   const addMessage = (message) => {
      setMessages([...messages, message]);
   };
   
   const buildMessage = (text, name = username, automatic) => {
      addMessage({
         name: name,
         text: text,
         automatic: automatic
      })
   };
   
   //respond to user after messages updated
   useEffect(() => {
      if (messages.last() && !messages.last().automatic) {
         if (botTimer)
            clearTimeout(botTimer);
         
         setBotTimer(setTimeout(
            () => buildMessage(BOT_MESSAGE + ", " + username, BOT_NAME, true),
            500
         ));
      }
   }, [messages]);
   
   return (
      <Card className={classes.root}>
         <MessageList messages={messages}/>
         <Input addMessage={buildMessage}/>
      </Card>
   );
};

const BOT_NAME = "Bot";

const BOT_MESSAGE = "Thank you";

const INITIAL_MESSAGES = [{
   name: BOT_NAME,
   text: "Hello, I`m polite bot, send me something",
   automatic: true
}];

//using makeStyles to set card root style
// avoiding the use of !important in css file
const useStyles = makeStyles(theme => ({
   root: {
      backgroundColor: "#FCFCFC",
      marginLeft: "20px",
      marginRight: "20px",
      width:"75%",
      minWidth: "400px",
   },
}));
