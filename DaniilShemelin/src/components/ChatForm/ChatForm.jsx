import React, { useState, useRef, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import "./ChatForm.css";

function useInput(initialState) {
  const [state, setState] = useState(initialState);

  const setInput = (event) => {
    setState(event.currentTarget.value);
  }

  return [state, setInput];
}

export const ChatForm = ({ onSendMessage }) => {
  const [name, setName] = useInput('Daniil');
  const [content, setContent] = useInput('');

  const onSubmit = (event) => {
    event.preventDefault();
    if(content && name) onSendMessage({name, content});
    else {
      console.error(new Error("Заполните обязательные поля"))
      return;
    }
  }

  return (
    <form className="chat-form__form">
      <TextField
        className="chat-form__input"
        type="text"
        required
        name="name"
        label="Введите имя"
        variant="outlined"
        value={ name }
        onChange={ setName }
      />
      <TextField
        autoFocus
        className="chat-form__textarea"
        required
        multiline
        name="content"
        label="Введите сообщение"
        variant="outlined"
        value={ content }
        onChange={ setContent }
      />
      <Button
        variant="outlined"
        color="primary"
        onClick={ onSubmit }
      >
        Отправить сообщение
      </Button>
    </form>
  )
}

ChatForm.propTypes = {
  onSendMessage: PropTypes.func.isRequired
}
