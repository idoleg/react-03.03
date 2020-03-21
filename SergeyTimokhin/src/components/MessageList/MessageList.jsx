import React from 'react';
import { Message } from '../Message/Message';
import PropTypes from 'prop-types';

import './MessageList.css';


export const MessageList = ({ messages }) => {
    return (<ul className="MessageList">
        {messages.map((item, index) => <Message {...item} key={index} />)}
    </ul>)
}


MessageList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes))
};
