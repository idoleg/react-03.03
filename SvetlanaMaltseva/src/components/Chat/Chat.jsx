import React from 'react';
import MessageList from '../MessageList/MessageList';
import Form from '../Form/Form';

export const Chat = ({ messages, addMessage }) => {
  return (
    <>
      <MessageList messages={messages} />
      <Form addMessage={addMessage} />
    </>
  );
};
