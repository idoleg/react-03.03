import React from "react"
import Message from "./Message";

export default function MessageList({messages}) {
   
   return (
      <ul>{messages.map((message, index) => <Message {...message} key={index}/>)}</ul>
   );
}
