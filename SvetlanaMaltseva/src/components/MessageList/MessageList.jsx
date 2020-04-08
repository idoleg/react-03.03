import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageItem from '../MessageItem/MessageItem';

class MessageList extends Component {
  render() {
    const { messages } = this.props;

    return (
      <>
        {messages.map((message, index) => (
          <MessageItem key={index} {...message} />
        ))}
      </>
    );
  }
}
MessageList.propTypes = {
  messages: PropTypes.array.isRequired
};

export default MessageList;
