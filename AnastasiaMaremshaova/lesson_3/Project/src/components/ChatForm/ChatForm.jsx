import React, {useState, useRef, useEffect} from "react";
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './ChatForm.css'

export const ChatForm = ({onSendMessage}) => {
    const [name, setName] = useState('User');
    const [content, setContent] = useState('');
    //const [state, setState] = useState(initialState);


    const clearValue = (event) =>{
        setContent('');
    };

    const onSubmit = (event) => {
        onSendMessage({name, content});

        
    }  


    return (<form> 
            <TextField 

                className="input-name"
                variant="outlined"
                label="Имя"
                name="name" 
                value={name} 
                onChange={(event) => {setName(event.target.value)}}/>
            <TextField
            className="input-message"
                variant="outlined"
                label="Сообщение"
                autoFocus
                multiline
                required
                name="content" 
                placeholder="Введите наше сообщение..." 
                value={content} 
                onChange={(event)=>{setContent(event.target.value)}}
                onKeyPress={(event) => {
                    console.log(`Pressed keyCode ${event.key}`);
                    if (event.key === 'Enter'){
                        event.preventDefault ? event.preventDefault() : event.returnValue = false;
                        if (content != ''){
                        onSubmit();
                        clearValue(); 
                    }
                }}
                }/>
            <Button
                className="btn-send"
                variant="contained"
                color="primary"
                onClick={()=>{
                    if (content != ''){
                    onSubmit(); 
                    clearValue(); 
                    }
                }
                }
            >
                Send
            </Button>
        </form>);
}

ChatForm.propTypes = {
    onSendMessage: PropTypes.func.isRequired,
}