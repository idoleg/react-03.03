import React, { useState } from "react";
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './ChatForm.css';

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

    const onSubmit = () => {
        onSendMessage({ name, content });
    }

    return (<div className="form-wrapper">
        <form className="form">
            <TextField
                label="Введите Имя"
                id="standard-basic"
                name="name"
                value={name}
                onChange={setName}
                required
            />
            <br/>
            <TextField
                label="Введите cообщение"
                autoFocus
                multiline
                required
                id="standard-basic"
                name="content"
                placeholder="Введите наше сообщение..."
                value={content}
                onChange={setContent}
            /><br/>
            <Button
                variant="contained"
                color="primary"
                onClick={onSubmit}>
                Отправить сообщение
            </Button>
        </form>
        </div>
    );
}

ChatForm.propTypes = {
    onSendMessage: PropTypes.func.isRequired,
}