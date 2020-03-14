import React, { Component } from 'react';
import MessageItem from './MessageItem';

class MessageList extends Component {
  render() {
    const { messages } = this.props;

    return (
      <div>
        {messages.map((message, index) => (
          <MessageItem key={index} {...message} />
        ))}
      </div>
    );
  }
}

export default MessageList;
