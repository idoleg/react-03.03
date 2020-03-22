import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Message } from '../Message/Message';

export const MessageList = ({ messages }) => {
  const listRef = useRef(null);

  useEffect(() => {
    listRef.current.lastChild.scrollIntoView({ block: 'center', behavior: 'smooth' });
  });

  return (
    <ul className="chat__messages" ref={listRef}>
      {messages.map((message, i) => (
        <Message {...message} key={i} />
      ))}
    </ul>
  );
};

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes))
};
