import React from 'react';
import { Message } from './../Message/Message.jsx';
import { MessageList } from './../MessageList/MessageList.jsx';
import { ChatForm } from './../ChatForm/ChatForm.jsx';
import './Chat.css';
import PropTypes from 'prop-types';

export const Chat = ({ messages, onSendMessage }) => {
  if(messages) {
  return (
    <div className="chat__wrapper">
      { messages.length ? <MessageList messages={ messages } /> : <h1 className="message__none">Нет сообщений</h1> }
      <ChatForm onSendMessage={ onSendMessage } />
    </div>
  )
  } else {
    return <div>Выбери чат из списка</div>
  }
}

Chat.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
  onSendMessage: PropTypes.func.isRequired
}
