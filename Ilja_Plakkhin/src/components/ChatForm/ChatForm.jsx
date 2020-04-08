import React, {useState, useRef, useEffect} from "react";
import PropTypes from 'prop-types';
import "./ChatForm.css";
import TextField from '@material-ui/core/TextField';

function useInput(initialState) {
  const [state, setState] = useState(initialState);

  const setInput = (event) => {
    setState(event.currentTarget.value)
  }
  return [state, setInput];
}

export const ChatForm = ({ onSendMessage }) => {
  const [author, setAuthor] = useInput('Илья');
  const [text, setText] = useInput('');

  const onSubmit = (event) => {
    event.preventDefault();
    if (event.keyCode === 13) { // Enter
        onSendMessage({author, text})
    }
    else if(author, text) {onSendMessage({author, text});}
    else {
      console.log("Заполните обязательные поля")
      return;}
  }

  return (
<div className="layout">
    <form onSubmit={onSubmit}>
    <TextField name="author"
               value={author}
               onChange={setAuthor}
               lable="Имя"
               variant="outlined"
           />
    <TextField name="content"
              autoFocus
              multiline
              variant="outlined"
              label="Сообщение"
              placeholder="Введите новое сообщение..."
              value={text}
              onChange={setText}
              />
    <button>Отправить</button>
    </form>
</div>
  );
}

ChatForm.propTypes = {
  onSendMessage: PropTypes.func.isRequired,
}
