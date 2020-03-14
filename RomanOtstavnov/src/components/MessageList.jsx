import React from 'react';
import Message from "./Message";

export const MessageList = ({ messages }) => {
  return (
    messages && (
      <ul className='message-list'>
        {messages.map((message, index) => <Message key={index} {...message} />)}
      </ul>
    )
);
};

export default MessageList;