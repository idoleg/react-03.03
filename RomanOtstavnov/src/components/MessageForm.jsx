import React, { useState, useEffect, useRef } from 'react';
import isFunction from 'lodash/isFunction';

const useInput = (initialState) => {
  const [state, setState] = useState(initialState);
  const setInput = ({ currentTarget: { value }}) => setState(value);
  return [state, setInput];
};

export const MessageForm = ({ setMessage }) => {
  const [name, setName] = useInput('');
  const [content, setContent] = useInput('');
  const [nameSaved, setNameSaved] = useState(false);

  const messageField = useRef();

  useEffect(() => {
    messageField.current.focus();
  }, []);

  const sendForm = (e) => {
    e.preventDefault();
    if(name && content && isFunction(setMessage)) {
      setMessage({ name, content });
      setContent({ currentTarget: { value: '' } });
      setNameSaved(true);
      messageField.current.focus();
    }
  };

  return (
    <form
      className='message-form'
      onSubmit={sendForm}
    >
      {nameSaved
        ? (
          <div>
            <strong>{name}</strong>
            <span style={{
              display: 'inline-block',
              color: 'red',
              cursor: 'pointer',
              marginLeft: '10px',
            }} onClick={() => setNameSaved(false)}>x</span>
          </div>
        ) : (
          <input
            name='name'
            type="text"
            value={name}
            onChange={setName}
            placeholder='Имя'
          />
        )
      }
      <input
        name='message'
        ref={messageField}
        value={content}
        onChange={setContent}
        placeholder='Сообщение'
      />
      <input type="submit" value='Отправить' />
    </form>
  )
};

export default MessageForm;