import React from 'react';
import PropTypes from 'prop-types';
import {MessageList, messageProps} from 'Components/MessageList/MessageList';
import {MessageInput} from 'Components/MessageInput/MessageInput';


export const Chat = ({messages, handleNewMessage}) => {
    return (
        <div>
            <MessageList messages={messages}/>
            <MessageInput handleNewMessage={handleNewMessage}/>
        </div>
    )
};

Chat.propTypes = {
    messages: PropTypes.arrayOf(messageProps).isRequired,
    handleNewMessage: PropTypes.func.isRequired,
};