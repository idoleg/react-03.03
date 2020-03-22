import React from 'react';
import PropTypes from 'prop-types';

import {Message} from "../Message/Message";
import {MessageField} from "../MessageField/MessageField";
import {ChatForm} from "../ChatForm/ChatForm";


export const Chat = ({messages, onSendMessage}) => {
    return (<div>
        
        <MessageField messages={messages} />
        <ChatForm onSendMessage={onSendMessage}/>
    </div>
    )
};

Chat.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
     onSendMessage: PropTypes.func.isRequired,
}