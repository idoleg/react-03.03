import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Message } from '../Message/Message';
import { MessageList } from '../MessageList/MessageList';
import { ChatForm } from '../ChatForm/ChatForm';
import './Chat.css'
export const Chat = ({messages, onSendMessage}) => {
    return  <div className="ChatContainer">
                <MessageList messages={messages}/>
                <ChatForm onSendMessage={onSendMessage} />
            </div>
}

Chat.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
    onSendMessage: PropTypes.func.isRequired
};