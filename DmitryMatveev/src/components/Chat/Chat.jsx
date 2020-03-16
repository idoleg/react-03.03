import React from "react";
import PropTypes from 'prop-types';
import {Message} from '../Message/Message';
import {MessageList} from '../MessageList/MessageList';
import {FormForUser} from '../FormForUser/FormForUser';



export const Chat = ({messages, onSendMessage}) => {
    return (<div>
        <MessageList messages={messages}/>
        <FormForUser  onSendMessage={onSendMessage}/>
    </div>);
}

Chat.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
    onSendMessage: PropTypes.func.isRequired,
}