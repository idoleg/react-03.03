import React, {useState, useRef, useEffect} from "react";
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useInput} from '../../hooks/useInput';





export const FormForUser = ({onSendMessage}) => {
    const [name, setName] = useInput('User');
    const [text, setContent, setContentState] = useInput('');
    
    const textarea = useRef();

    const onSubmit = (event) => {
        onSendMessage({name, text});
        setContentState('');
        textarea.current.focus();
    }  

    return (<form> 
            <TextField 
                variant="outlined"
                label="Имя"
                name="name" 
                value={name} 
                onChange={setName}/>
            <TextField
                inputRef={textarea}
                variant="outlined"
                label="Сообщение"
                autoFocus
                multiline
                required
                name="content" 
                placeholder="Введите сообщение..." 
                value={text} 
                onChange={setContent}/>
            <Button
                variant="contained"
                color="primary"
                onClick={onSubmit}
            >
                Send
            </Button>
        </form>);
}

FormForUser.propTypes = {
    onSendMessage: PropTypes.func.isRequired,
}