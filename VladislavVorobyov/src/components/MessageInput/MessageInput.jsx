import React, {useState, useEffect, useRef} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';


export const MessageInput = ({handleNewMessage}) => {
    const [content, setContent] = useState('');
    const sendMessage = () =>{
        handleNewMessage(content);
        setContent('');
    };
    const onSubmit = (event) => {
        event.preventDefault();
        sendMessage();
    };
    const onKeyUp = (event) => {
        if (event.keyCode === 13 && !event.shiftKey) sendMessage();
    };
    const onChange = (event) => {
        setContent(event.currentTarget.value)
    };


    return (<form onSubmit={onSubmit}>
                <TextField
                    id="message-input"
                    placeholder="Введите ваше сообщение..."
                    value={content}
                    onChange={onChange}
                    onKeyUp={onKeyUp}
                    multiline
                    autoFocus
                />

                <Button
                    variant="contained"
                    color="primary"
                    endIcon={<Icon>send</Icon>}
                >
                    Send
                </Button>
    </form> )
};


MessageInput.propTypes = {
    handleNewMessage: PropTypes.func.isRequired,
};