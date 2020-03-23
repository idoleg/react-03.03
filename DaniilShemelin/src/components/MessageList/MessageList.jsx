import React, { useEffect, useState } from 'react';
import { Message } from './../Message/Message.jsx';
import PropTypes from 'prop-types';
import './MessageList.css';

export const MessageList = ({ messages }) => {
  return (
    <>
      <div className="message__wrapper">
        { messages.map((message, index) => <Message key={index} {...message} />) }
      </div>
    </>
  )
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes))
}
