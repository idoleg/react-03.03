import React,{Component} from 'react';
import {Message} from '../Message/Message';
import './MessageList.css';

export  class MessageList extends Component {
  render() {
    const { messages } = this.props;

    return (
      <ul className="content__messages">
        {messages.map((message, i) => (
          <Message {...message} key={i} />
        ))}
      </ul>
    );
  }
}