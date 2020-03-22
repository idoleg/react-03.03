import React from "react"
import {Message} from "./Message";


//MessageList instead of MessageField for wrapping messages as it seems more logical
export const MessageList = ({messages}) => {
   return (
      //inline style for this task
      <div style={{height: '250px', overflowY: 'scroll'}}>
         <ul>{messages.map((message, index) => <Message {...message} key={index}/>)}</ul>
      </div>
   )
};
