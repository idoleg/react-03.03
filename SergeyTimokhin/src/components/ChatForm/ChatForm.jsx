import React, { useState, useRef, useEffect } from 'react';
import PropTypes, { func } from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useInput} from '../../hooks/useInput';
import './ChatForm.css';



export const ChatForm = ({ onSendMessage }) => {
    const [name, setName] = useInput('User');
    const [content, setContent, setContentState] = useInput('');

    const textarea =useRef();

    // useEffect(()=> {
    //     textarea.current.focus()
    // }, [])

    const onSubmit = (event) => {
        // event.preventDefault();
        onSendMessage({name, content});
        setContentState('');
        textarea.current.focus();
    }

    return (<form>
        <TextField name='name'
        className="Chatform--name"
        value={name}
        onChange={setName}
        label="Name" />
        <TextField name='content'
        inputRef={textarea}
        className="Chatform--content"
         autoFocus
         multiline
         label="Message"
         required
         placeholder='Your message...'
         value={content}
         onChange={setContent} />
        <Button
        className="Chatform--btn"
        variant="contained"
        color="primary"
        onClick={onSubmit}
        >
        Send</Button>
    </form>)
}


ChatForm.propTypes = {
    onSendMessage: PropTypes.func.isRequired,
}
