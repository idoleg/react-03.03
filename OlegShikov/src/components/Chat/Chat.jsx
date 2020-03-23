import React from "react";
import PropTypes from 'prop-types';
import {Message} from '../Message/Message';
import {MessageList} from '../MessageList/MessageList';
import {ChatForm} from '../ChatForm/ChatForm';

export const Chat = ({messages, onSendMessage}) => {
    if(messages){
        return (<div>
            {messages.length ? <MessageList messages={messages}/> : "Нет сообщений" }
            <ChatForm onSendMessage={onSendMessage}/>
        </div>);
    } else {
        return (
            <strong>Выберите чат в списке.</strong>
        )
    }
    
}

Chat.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
    onSendMessage: PropTypes.func.isRequired,
}