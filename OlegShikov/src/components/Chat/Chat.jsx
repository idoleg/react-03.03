import React from "react";
import PropTypes from 'prop-types';
import {Message} from '../Message/Message';
import {MessageList} from '../MessageList/MessageList';
import {ChatForm} from '../ChatForm/ChatForm';

export const Chat = ({isLoading, error, messages, onSendMessage}) => {
    if(isLoading) {
        return <div>Сообщения загружаются</div>
    }
    if(error) {
        return <div>Ошибка подключения</div>
    }

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