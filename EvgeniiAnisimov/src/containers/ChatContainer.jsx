import React, { Component } from 'react';
import { Chat } from '../components/Chat/Chat';

export const ROBOT = 'Robot';

export class ChatContainer extends Component {
  state = {
    messages: [
      {name: "Ivan", content: "Hello, world"},
      {name: "Petr", content: "Hello, how are you?"},
      {name: "Ivan", content: "I'm well"}
    ],
    lastMessage: {name: "Ivan", content: "I'm well"}
  }

  componentDidUpdate() {
    // const lastMessage = this.state.messages[this.state.messages.length - 1];
    // console.log("componentDidUpdate->" + lastMessage.name);

    this.handleRobot()
    // if(lastMessage.name !== ROBOT) {
    //   setTimeout(() => this.handleSendMessage({
    //     name: ROBOT,
    //     content: `Hello, ${lastMessage.name}, I'm Robot!`,
    //   }), 3000)
    // }
  }

  handleRobot = () => {
    this.setState((state) => ({lastMessage: state.messages[state.messages.length - 1]}))

    console.log("handleRobot->" + this.state.lastMessage.name)
    // if(this.state.lastMessage.name !== 'Robot') {
    //   setTimeout(() => this.handleSendMessage({
    //     name: 'Robot',
    //     content: `Hello, ${lastMessage.name}, I'm Robot!`,
    //   }), 3000)
    // }
  }

  handleSendMessage = (message) => {
    this.setState((state) => ({messages: [...state.messages, message]}));
  }

  render() {
    return <Chat messages={this.state.messages}     onSendMessage={this.handleSendMessage} />;
  }
}
