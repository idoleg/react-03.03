import React from "react";
import {MessageList} from "../MessageList/MessageList";
import {MessageForm} from "../MessageForm/MessageForm";

import {Card} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


export const ChatView = ({messages, addMessage}) => {
   const classes = useStyles();

   return (
      <Card className={classes.root}>
         <MessageList messages={[...messages.values()]}/>
         <MessageForm sendMessage={addMessage}/>
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
