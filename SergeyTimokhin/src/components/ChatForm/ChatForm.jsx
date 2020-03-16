import React, { useState, useRef, useEffect } from 'react';
import PropTypes, { func } from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';



function useInput(initialState) {
    const [state, setState] = useState(initialState);

    const setInput = (event) => {
        setState(event.currentTarget.value);
    }

    return [state, setInput];
}

export const ChatForm = ({ onSendMessage }) => {
    const [name, setName] = useInput('User');
    const [content, setContent] = useInput('');

    // const textarea =useRef();

    // useEffect(()=> {
    //     textarea.current.focus()
    // }, [])

    const onSubmit = (event) => {
        // event.preventDefault();
        onSendMessage({name, content});
    }

    return (<form>
        <TextField name='name'
        value={name}
        onChange={setName}
        label="Name" />
        <TextField name='content'
        //  ref={textarea}
         autoFocus
         multiline
         label="Message"
         required
         placeholder='Your message...'
         value={content}
         onChange={setContent} />
        <Button
        variant="contained"
        color="primary"
        onClick={onSubmit}
        // endIcon={<Icon>send</Icon>}
        >
        Send</Button>
    </form>)
}


ChatForm.propTypes = {
    onSendMessage: PropTypes.func.isRequired,
}
