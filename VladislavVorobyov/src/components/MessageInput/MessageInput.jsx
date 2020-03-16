import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';


export const MessageInput = ({handleNewMessage}) => {
    const [content, setContent] = useState('');
    const textarea = useRef();
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
    useEffect(()=> {
        textarea.current.focus();
    });

    return (<form onSubmit={onSubmit}>
                <textarea ref={textarea}
                          value={content}
                          onChange={onChange}
                          onKeyUp={onKeyUp}
                          placeholder="Введите ваше сообщение..."
                />
                <button>Отправить</button>
    </form> )
};


MessageInput.propTypes = {
    handleNewMessage: PropTypes.func.isRequired,
};