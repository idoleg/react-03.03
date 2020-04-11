import React from 'react';
import PropTypes from 'prop-types';
import './MessageField.css';

import {Message} from "../Message/Message";

export const MessageField = ({messages}) => {
    return (<ul className="MessageField">
            {messages.map((item, index) => <Message {...item} key={index} />)}
    </ul>)
};

MessageField.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
}