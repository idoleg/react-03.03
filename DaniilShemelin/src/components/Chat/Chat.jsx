import React from 'react';
import { Message } from './../Message/Message.jsx';
import { MessageList } from './../MessageList/MessageList.jsx';
import PropTypes from 'prop-types';

export const Chat = ({ messages, onSendMessage }) => {
  return (
    <div>
      <MessageList messages={ messages } />
    </div>
  )
}

Chat.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
  onSendMessage: PropTypes.func.isRequired
}
