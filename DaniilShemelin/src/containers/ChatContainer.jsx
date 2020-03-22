import React, { Component } from 'react';
import { Chat } from "./../components/Chat/Chat.jsx"
import { ChatList } from './../components/ChatList/ChatList.jsx';

export class ChatContainer extends Component {
  constructor() {
    super();

    this.state = {
      messages: [
        { name: "Ivan", content: "Hi!" },
        { name: "Oleg", content: "Hello!" },
        { name: "Ivan", content: "How are you?" },
      ],
      timeoutId: null
    };
    this.handleSendMessage = this.handleSendMessage.bind(this);
  }

  componentDidUpdate() {
    const lastUserIdx = this.state.messages.length - 1;
    const lastUserName = this.state.messages[lastUserIdx].name;

    const robotName = "Mr. Robot";
    const robotMessage = `What's wrong with you, ${ lastUserName }? I'm Robot, don't talk to me.`;

    if(lastUserName !== robotName) {
      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() => this.handleSendMessage({
          name: robotName,
          content: robotMessage,
      }), 1000);
    }
  }

  handleSendMessage(message) {
    this.setState({
      messages: [...this.state.messages, message]
    })
  }

  render() {
    return (
      <>
        <ChatList />
        <Chat messages={ this.state.messages } onSendMessage={ this.handleSendMessage }/>
      </>);
  }
}
