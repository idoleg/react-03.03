import React from "react";
import PropTypes from 'prop-types';
import {Message} from '../Message/Message';
import {MessageList} from '../MessageList/MessageList';
import {ChatForm} from '../ChatForm/ChatForm';
import {HeaderChat} from '../HeaderChat/HeaderChat'

import './Chat.css'

export const Chat = ({nameChat, messages, onSendMessage}) => {
    return (<div className='Chat'>
        <HeaderChat nameChat={nameChat}/>
        <MessageList messages={messages}/>
        <ChatForm onSendMessage={onSendMessage}/>
    </div>);
}

Chat.propTypes = {
    nameChat: PropTypes.string, 
    chats: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
    onSendMessage: PropTypes.func.isRequired,
}