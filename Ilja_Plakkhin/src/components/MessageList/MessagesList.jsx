import React from "react";
import ReactDOM from "react-dom";
import Message from '../Message/Message';
import '<./style.css>';

export default class MessageList extends React.Component {
  render() {
const { messages } = this.props;
    return (
      <ul className="content__messages">
        {messages.map((message, index) => (
          <Message {...message} key={index} />
        ))}
      </ul>
    );
  }
}
