import React from 'react';
import PropTypes from 'prop-types';
import { Message } from '../Message/Message';
import { MessageList } from '../MessageList/MessageList';
import { ChatForm } from '../ChatForm/ChatForm';

export const Chat = ({error, isLoading, messages, onSendMessage}) => {
  if(isLoading) {
    return <div>Messages is loading</div>
  }
  if(error) {
    return <div>Ошибка подключения</div>
  }
  if(messages) {
    return(<div>
      {messages.length ? <MessageList messages = {messages} /> : "Нет сообщений"}
      <ChatForm onSendMessage={onSendMessage}/>
    </div>)
  } else {
    return(
      <strong>Выберите чат из списка.</strong>
    )
  }
}

Chat.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
  onSendMessage: PropTypes.func.isRequired,
}
