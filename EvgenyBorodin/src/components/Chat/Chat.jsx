import React from "react";
import PropTypes from 'prop-types';
import { MessageList } from '../MessageList/MessageList.jsx';
import { Message } from '../Message/Message.jsx'
import { ChatForm } from '../ChatForm/ChatForm.jsx';

import './Chat.css'

export const Chat = ({messages, defaultUser, onSendMessage}) => {
    if (messages) {
        return (<div className="chat">
            {messages.length ? <MessageList messages={messages}/> : <h2>No messages.</h2> }
            <ChatForm defaultUser={defaultUser} onSendMessage={onSendMessage}/>
        </div>);
    } else {
        return (<div className="chat">
            <span>Choose chat in the chat list.</span>
        </div>)
    }
}

Chat.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
    defaultUser: PropTypes.string,
    onSendMessage: PropTypes.func.isRequired,
}