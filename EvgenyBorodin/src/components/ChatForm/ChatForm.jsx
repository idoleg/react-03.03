import React, { useRef } from "react";
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import useInput from '../../hooks/useInput.js';

import './ChatForm.css'

export const ChatForm = ({defaultUser, onSendMessage}) => {
    const [user, setUser] = useInput(defaultUser);
    const [text, setText] = useInput('');

    const textarea = useRef();
    
    const onSubmit = (event) => {
        // event.preventDefault();
        onSendMessage({user, text});
        setText({ currentTarget: { value: '' }});
        textarea.current.focus();
    }
    
    const onKeyUp = (event) => {
        if (event.keyCode === 13) { // Enter
            onSubmit()
        }
    }

    return (<form> 
        <TextField 
            variant="outlined"
            label="Имя"
            className="field-name"
            name="name" 
            value={user} 
            onChange={setUser}/>
        <TextField
            inputRef={textarea}
            variant="outlined"
            label="Сообщение"
            autoFocus
            multiline
            required
            className="field-text"
            name="text" 
            placeholder="Введите ваше сообщение..." 
            value={text} 
            onChange={setText}
            onKeyUp={onKeyUp}/>
        <Button
            variant="contained"
            color="primary"
            className="button-send"
            onClick={onSubmit}
        >
            Отправить
        </Button>
    </form>);
}

ChatForm.propTypes = {
    defaultUser: PropTypes.string,
    onSendMessage: PropTypes.func.isRequired,
}