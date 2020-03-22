import React, {useState, useEffect} from "react";
import {MessageList} from "../../components/MessageList/MessageList";
import {MessageForm} from "../../components/MessageForm/MessageForm";
import {BOT_MESSAGE} from "../../utils/Constants";

import {Card} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


export const ChatView = ({messages, addMessage, chatId}) => {
   const [botTimer, setBotTimer] = useState(null);

   const classes = useStyles();

   const sendMessage = (text, automated = false) => {
      addMessage(text, chatId, automated)
   };

   //respond to user after messages updated
   useEffect(() => {
      if ([...messages.values()].last() && ![...messages.values()].last().automated) {
         clearTimeout(botTimer);
         setBotTimer(setTimeout(
            () => sendMessage(BOT_MESSAGE, true),
            700
         ));
      }
   }, [messages]);

   return (
      <Card className={classes.root}>
         <MessageList messages={[...messages.values()]}/>
         <MessageForm sendMessage={sendMessage}/>
      </Card>
   );
};

//using makeStyles to set card root style
// avoiding the use of !important in css file
const useStyles = makeStyles(theme => ({
   root: {
      backgroundColor: "#FCFCFC",
      marginLeft: "12px",
      marginRight: "12px",
      width: "75%",
      minWidth: "400px",
   },
}));
