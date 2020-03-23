import React from "react";

export const MessageList = ({messages}) => {
    return (<ul>
        {messages.map((item, index) => <Message {...item} key={index} />)}
    </ul>);
}