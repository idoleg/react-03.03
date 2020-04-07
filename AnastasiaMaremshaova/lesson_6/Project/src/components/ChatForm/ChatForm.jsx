import React, {useState, useRef, useEffect} from "react";
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './ChatForm.css'

import {useStylesBtn, useStylesTextField} from './useStyles'


export const ChatForm = ({onSendMessage}) => {

    const classesBtn = useStylesBtn();
    const classesTextField = useStylesTextField(); 

    const [name, setName] = useState('User');
    const [content, setContent] = useState('');


    const clearValue = (event) =>{
        setContent('');
    };

    const onSubmit = (event) => {
        onSendMessage({name, content});
        
    }  


    return (<form  > 
            <TextField 
            classes={{root: classesTextField.root}}
                id="filled-basic"
                variant="filled"
                label="Имя"
                name="name" 
                value={name} 
                multiline
                onChange={(event) => {setName(event.target.value)}}/>
            <TextField
            classes={{root: classesTextField.root}}
            id="filled-basic"
            variant="filled"
            className="input-message"
                label="Сообщение"
                required
                name="content" 
                placeholder="Введите наше сообщение..." 
                multiline
                value={content} 
                onChange={(event)=>{setContent(event.target.value)}}
                onKeyPress={(event) => {
                    if (event.key === 'Enter'){
                        event.preventDefault ? event.preventDefault() : event.returnValue = false;
                        if (content != ''){
                        onSubmit();
                        clearValue(); 
                    }
                }}
                }/>
            <Button
            classes={{root: classesBtn.root}}
                className="btn-send"
                variant="contained"
                onClick={()=>{
                    if (content != ''){
                    onSubmit(); 
                    clearValue(); 
                    }
                }
                }
                
            >
                <img src='src/img/send-button.svg' alt="send" className="img-send"/>
            </Button>
        </form>);
}

ChatForm.propTypes = {
    onSendMessage: PropTypes.func.isRequired,
}