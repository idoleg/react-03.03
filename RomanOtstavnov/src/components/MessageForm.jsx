import React, {useEffect, useRef, useState} from 'react';

export const MessageForm = ({ setMessage }) => {
  const [trigger, updateForm] = useState(false);

  const nameInput = useRef();
  const messageInput = useRef();

  useEffect(() => {
    const name = nameInput.current.value;
    const content = messageInput.current.value;

    if(name && content) {
      setMessage({ name, content });
      messageInput.current.value = '';
    }
  }, [trigger]);

  return (
    <form
      className='message-form'
      onSubmit={e => {
        e.preventDefault();
        updateForm(!trigger);
      }}
    >
      <input type="text" placeholder='Имя' ref={nameInput}/>
      <input type="text" placeholder='Сообщение' ref={messageInput} />
      <input type="submit" value='Отправить' />
    </form>
  );
};

export default MessageForm;