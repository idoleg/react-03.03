import React, { useState } from 'react';
import "./ChatForm.css";
import PropTypes from 'prop-types';

export const ChatForm = ({ onSendMessage }) => {
  const [name, setName] = useState('Test');
  const [content, setContent] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    onSendMessage({name, content});
    console.log(onSendMessage({name, content}))
  }

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        name="name"
        value={ name }
        onChange={({currentTarget: { value }}) => setName(value)}
      />
      <textarea
        name="content"
        placeholder="Введите сообщение"
        value={ content }
        onChange={({currentTarget: { value }}) => setContent(value)}
      />
      <button className="message__btn">Отправить сообщение</button>
    </form>
  )
}

ChatForm.propTypes = {
  onSendMessage: PropTypes.func.isRequired
}
