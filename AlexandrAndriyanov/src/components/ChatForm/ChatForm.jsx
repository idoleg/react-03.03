import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
//import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
//import Icon from '@material-ui/core/Icon';
//import SendIcon from '@material-ui/icons/Send';


function useInput(initialState) {
    const [state, setState] = useState(initialState);
    const setInput = (event) => {
        setState(event.currentTarget.value)
    }
    
    return [state, setInput];
}

export const ChatForm = ({onSendMessage}) => {

    const [name, setName] = useInput('Username');
    const [content, setContent] = useInput('');
    
    //const textarea = useRef();
    // useEffect(() => {       textarea.current.focus();    }, [])
    

    
    const onSubmit = (event) => {
        //event.preventDefault();
        onSendMessage({name, content});

}
     
    return (<form>
       
        <TextField label="Имя" variant="outlined" name="name" value={name} onChange={setName} />
        <TextField 
        multiline
        autoFocus
        label="Сообщение" variant="outlined"
        //ref={textarea}
        required
        name="content" placeholder="Введите сообщение..." value={content} onChange={setContent} />
        <Button
        variant="contained"
        color="primary"
        onClick={onSubmit}
       // endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>
        
    </form>
    );
}

ChatForm.propTypes = {
     onSendMessage: PropTypes.func.isRequired,
}