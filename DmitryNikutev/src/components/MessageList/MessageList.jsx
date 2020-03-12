import React, {useEffect, useRef} from "react"
import {Message} from "../Message/Message";

import "./MessageList.css";


export const MessageList = ({messages}) => {
   let endOfList = useRef(null);
   
   //scroll down the chat every time message is added
   useEffect(() => {
      endOfList.scrollIntoView({behavior: "smooth"});
   }, [messages]);
   
   return (
         <ul className="MessageList">
            {messages.map((message, index) => <Message {...message} key={index}/>)}
            <div ref={(el) => endOfList = el}/>
         </ul>
   )
};
