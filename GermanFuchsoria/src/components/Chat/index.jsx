import React from 'react';
import PropTypes from 'prop-types';
import { Message } from '../Message';
import { MessageList } from '../MessageList';
import ChatForm from '../ChatForm';
import './index.scss';

export const Chat = ({ messages, onSendMessage }) => {
  return (
    <div className="chat">
      <MessageList messages={messages} />
      <ChatForm onSendMessage={onSendMessage} />
    </div>
  );
};

Chat.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
  onSendMessage: PropTypes.func.isRequired
};
