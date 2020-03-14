import React,{Component} from 'react';
import Message from './Message.jsx/Message';

export default class MessageList extends Component {
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