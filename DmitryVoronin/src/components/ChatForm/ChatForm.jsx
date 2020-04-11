import React, { useState, useRef, useEffect } from "react";
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useInput } from '../../hooks/useInput';

export const ChatForm = ({ onSendMessage }) => {
    const [name, setName] = useInput('User');
    const [content, setContent, setContentState] = useInput('');
    const textarea = useRef();
    const onSubmit = (event) => {
        onSendMessage({ name, content });
        setContentState('');
    }

    return (<form>
        <TextField
            variant="outlined"
            label="Имя"
            name="name"
            value={name}
            onChange={setName} />
        <TextField
            inputRef={textarea}
            variant="outlined"
            label="Сообщение"
            autoFocus
            multiline
            required
            name="content"
            placeholder="Введите наше сообщение..."
            value={content}
            onChange={setContent} />
        <Button
            variant="contained"
            color="primary"
            onClick={onSubmit}
        >
            Send
            </Button>
    </form>);
}

ChatForm.propTypes = {
    onSendMessage: PropTypes.func.isRequired,
}