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

  componentDidUpdate() {
    const lastMessage = this.state.messages[this.state.messages.length - 1];

    if(lastMessage.name != 'Robot') {
      setTimeout(() => this.handleSendMessage({
          name: 'Robot',
          content: `Hello ${lastMessage.name}, I'm Robot!`,
      }), 1000);
    }
  }

  handleSendMessage(message) {
    this.setState({
      messages: [...this.state.messages, message]
    })
  }

  render() {
    return (<><Chat messages={ this.state.messages } onSendMessage={ this.handleSendMessage }/></>);
  }
}
