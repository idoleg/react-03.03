import React from 'react';
import PropTypes from 'prop-types';

import {Message} from "../Message/Message";
import {MessageField} from "../MessageField/MessageField";
import {ChatForm} from "../ChatForm/ChatForm";


export const Chat = ({messages, onSendMessage}) => {
    if(messages){
        return (<div>
        {messages.length ? <MessageField messages={messages} /> : 'Нет сообщений' }
        <ChatForm onSendMessage={onSendMessage}/> 
    </div>
    )
        
    } else {
        return(        
        <strong>Выберет чат в списке</strong>)
    }
    
}

Chat.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
     onSendMessage: PropTypes.func.isRequired,
}