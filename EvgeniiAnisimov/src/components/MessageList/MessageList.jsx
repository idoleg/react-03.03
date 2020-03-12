import React from 'react';

export const MessagesList = ({messages}) => {
  return (<ul>
    {messages.map((item, index) => <Message {...item} key={index}/>)}
  </ul>);
}
