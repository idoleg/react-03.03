import React, {useState, useRef, useEffect} from "react";
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
//import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

function useInput(initialState) {
    const[state, setState] = useState(initialState);
    const setInput = (event) => {
        setState(event.currentTarget.value)        
    }
    return [state, setInput];
}

export const ChatForm = ({onSendMessage}) => {
    const [name, setName] = useInput('User');
    const [content, setContent] = useInput('');
    //const textarea = useRef();
    //console.log('ChatForm -> textarea', textarea)

    // useEffect(() => {
    //    // console.log("I'm updated")
    //    textarea.current.focus();
    // }, [])

    const onSubmit = (event) => {
        event.preventDefault();
        if(content) {        
        onSendMessage({name, content});
        } else {
            alert('Введите сообщение')
        }
    }
    const handleKeyUp = (event, message) => {
        if (event.keyCode === 13) { // Enter
            onSendMessage({name, content})
        }
    };

    return (<form>
        <TextField
            variant="outlined"
            label='Имя'
            name = 'name'
            value = {name} 
            //onChange = {({currentTarget: {value}}) => setName(value)}/>
            onChange = {setName}/>
        <TextField 
            //ref={textarea}
            //required
            variant="outlined"
            autoFocus
            multiline
            onKeyUp={ handleKeyUp }
            label='Сообщение'
            name = 'content'
            placeholder='Введите текст' 
            value = {content} 
            onChange = {setContent}/>
        
        <Button
            variant="contained"
            color="primary" 
            onClick = {onSubmit}           
            //endIcon={<Icon>send</Icon>}
        >
            Send
        </Button>
    </form>);
}
 
ChatForm.propsTypes = {
    onSendMessage: PropTypes.func.isRequired,
}