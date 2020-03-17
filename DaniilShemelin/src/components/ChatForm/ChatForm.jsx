import React, { useState, useRef, useEffect } from 'react';
import "./ChatForm.css";
import PropTypes from 'prop-types';

function useInput(initialState) {
  const [state, setState] = useState(initialState);

  const setInput = (event) => {
    setState(event.currentTarget.value);
  }

  return [state, setInput];
}

export const ChatForm = ({ onSendMessage }) => {
  const [name, setName] = useInput('Test');
  const [content, setContent] = useInput('');
  const textarea = useRef();

  useEffect(() => {
    textarea.current.focus();
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    if(content) onSendMessage({name, content});
    else {
      console.log(new Error("Заполните поле \"Сообщение\""))
      return;
    }
  }

  return (
    <form onSubmit={ onSubmit } class="chat-form__form">
      <input
        class="chat-form__input"
        type="text"
        required
        name="name"
        placeholder="Введите имя"
        value={ name }
        onChange={ setName }
      />
      <textarea
        class="chat-form__textarea"
        ref={ textarea }
        required
        name="content"
        placeholder="Введите сообщение"
        value={ content }
        onChange={ setContent }
      />
      <button className="message__btn">Отправить сообщение</button>
    </form>
  )
}

ChatForm.propTypes = {
  onSendMessage: PropTypes.func.isRequired
}
