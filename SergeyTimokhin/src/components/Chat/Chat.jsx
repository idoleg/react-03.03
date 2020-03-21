import React from "react";
import PropTypes from 'prop-types';
import {Message} from '../Message/Message';
import {MessageList} from '../MessageList/MessageList';
import {ChatForm} from '../ChatForm/ChatForm';

export const Chat = ({messages, onSendMessage}) => {
    if(messages) {
    return (<div style={ { width: '70%' } }>
        {messages.length ? <MessageList messages={messages}/> : <h1>There's no messages here</h1> }
        <ChatForm onSendMessage={onSendMessage}/>
    </div>);
    } else {
        return (<div style={ { width: '70%' } }>
            <h1 style={ { textAlign: 'center' } }>Choose a chat</h1>
        </div>)
    }
}

Chat.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
    onSendMessage: PropTypes.func.isRequired,
}
