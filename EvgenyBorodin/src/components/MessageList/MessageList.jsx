import React from "react";
import { Message } from './../Message/Message.jsx'

export const MessageList = ({messages}) => {
    return (<ul>
        {messages.map ((item, index) => <Message {...item} key={index}/>)}
    </ul>)
}

