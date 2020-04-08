import React, { Component } from 'react';
import { Chat } from "./../components/Chat/Chat.jsx"
import { ChatList } from './../components/ChatList/ChatList.jsx';

export class ChatContainer extends Component {
  constructor() {
    super();

    this.state = {
      chats: {
        1: {
          name: 'Chat 1',
          messages: [
            { name: "Ivan", content: "Hi!" },
            { name: "Oleg", content: "Hello!" },
            { name: "Ivan", content: "How are you?" },
          ],
        },
        2: {
          name: 'Chat 2',
          messages: [
            { name: "Ivan", content: "Mda" },
            { name: "Oleg", content: "Hello!" },
            { name: "Daniil", content: "Test2" },
          ],
        },
        3: {
          name: 'Chat 3',
          messages: [],
        }
      },
      timeoutId: null
    };
    this.handleSendMessage = this.handleSendMessage.bind(this);
    this.handleRobotAnswer = this.handleRobotAnswer.bind(this);
  }

  handleRobotAnswer () {
    const {id} = this.props.match.params;

    if(id && this.state.chats[id]) {
      const currentMessage = this.state.chats[id].messages;

      const lastUserIdx = currentMessage.length - 1;
      const lastUserName = currentMessage[lastUserIdx].name;

      const robotName = "Mr. Robot";
      const robotMessage = `What's wrong with you, ${ lastUserName }? I'm Robot, don't talk to me.`;

      if(lastUserName !== robotName) {
        clearTimeout(this.timeoutId);
        this.timeoutId = setTimeout(() => this.handleSendMessage(id)({
            name: robotName,
            content: robotMessage,
        }), 1000);
      }
    }
  }

  handleSendMessage = (id) => (message) => {
    this.setState({
      chats: {
        ...this.state.chats,
        [id]: {
          name: this.state.chats[id].name,
          messages: [...this.state.chats[id].messages, message]
        }
      }
    }, this.handleRobotAnswer)
  }

  render() {
    const {id} = this.props.match.params;
    const {messages} = id && this.state.chats[id] ? this.state.chats[id] : undefined;

    return (
      <>
        <ChatList />
        <Chat messages={ messages } onSendMessage={ this.handleSendMessage(id) }/>
      </>);
  }
}
