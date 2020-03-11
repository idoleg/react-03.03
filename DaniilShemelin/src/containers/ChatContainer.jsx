import React, { Component } from 'react';
import { Chat } from "./../components/Chat/Chat.jsx"

export class ChatContainer extends Component {
  constructor() {
    super();

    this.state = {
      messages: [
        { name: "Ivan", content: "Hi!" },
        { name: "Oleg", content: "Hello!" },
        { name: "Ivan", content: "How are you?" },
      ]
    };
    this.handleSendMessage = this.handleSendMessage.bind(this);
  }

  handleSendMessage(message) {

  }

  render() {
    return <Chat messages={ this.state.messages } onSendMessage={ this.handleSendMessage }/>;
  }
}
