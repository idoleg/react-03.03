import React, { useState } from "react";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './chatForm.scss'


function useInput(initialState) {
    const [state, setState] = useState(initialState);

    const setInput = (event) => {
        setState(event.currentTarget.value)
    }

    return [state, setInput];
}

export const ChatForm = ({ onSendMessage }) => {
    const [name, setName] = useInput('User');
    const [content, setContent] = useInput('');


    const handleKeyUp = (event) => {
        if (event.keyCode === 13) { // Enter
            
            onSubmit();
        }
    };

    const onSubmit = () => {

        if (content) {      
        onSendMessage( {name, content });
        }
    }

    return (<div className='chatForm'>
        <TextField
            variant="standard"
            label="Имя"
            name="name"
            value={name}
            onChange={setName} />
        <TextField
            className='my-contentField'
            variant="standard"
            label="Сообщение"
            autoFocus
            multiline
            required
            name="content"
            placeholder="Введите наше сообщение..."
            value={content}
            onKeyUp={handleKeyUp}
            onChange={setContent} />
        <Button
            className='my-btn'
            variant="contained"
            color="primary"
            onClick={onSubmit}
        >
            Отправить
            </Button>
    </div>);
}
