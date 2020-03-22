import React, { useState } from "react";
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

    return (<form>
        <TextField
            variant="outlined"
            label="Имя"
            name="name"
            value={name}
            onChange={setName} />
        <TextField
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
    </form>
    );
}

ChatForm.propTypes = {
    onSendMessage: PropTypes.func.isRequired,
}