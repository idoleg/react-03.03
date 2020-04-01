import React, {useState} from "react";
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './ChatForm.css'

function useInput(initialState) {
    const [state, setState] = useState(initialState);

    const setInput = (event) => {
        setState(event.currentTarget.value)
    }

    return [state, setInput];
}

export const ChatForm = ({onSendMessage}) => {
    const [user, setUser] = useInput('User');
    const [text, setText] = useInput('');
    
    const onSubmit = (event) => {
        // event.preventDefault();
        onSendMessage({user, text});
        setText({ currentTarget: { value: '' }});
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
    onSendMessage: PropTypes.func.isRequired,
}