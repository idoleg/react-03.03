import React, { useState } from "react";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './chatForm.scss'


export const ChatForm = ({handleSendMessage }) => {
    const [name, setName] = useState('User');
    const [content, setContent] = useState('');


    const handleKeyUp = (event) => {
        event.preventDefault();
        if (event.keyCode === 13) { // Enter
            
            onSubmit();
        }
    };

    const onSubmit = () => {
     
        if ((content.trim() != '')) {
            handleSendMessage({ name, content });
            setContent('');
        }
    }

    return (<div className='chatForm'>
        <TextField
            variant="standard"
            label="Имя"
            name="name"
            value={name}
            onChange={({ currentTarget: { value } }) => setName(value)} />
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
            onChange={({ currentTarget: { value } }) => setContent(value)} />
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
