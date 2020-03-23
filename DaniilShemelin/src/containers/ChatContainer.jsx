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
  }

  // componentDidUpdate() {
  //   const lastUserIdx = this.state.messages.length - 1;
  //   const lastUserName = this.state.messages[lastUserIdx].name;

  //   const robotName = "Mr. Robot";
  //   const robotMessage = `What's wrong with you, ${ lastUserName }? I'm Robot, don't talk to me.`;

  //   if(lastUserName !== robotName) {
  //     clearTimeout(this.timeoutId);
  //     this.timeoutId = setTimeout(() => this.handleSendMessage({
  //         name: robotName,
  //         content: robotMessage,
  //     }), 1000);
  //   }
  // }

  handleSendMessage(message) {
    this.setState({
      messages: [...this.state.messages, message]
    })
  }

  render() {
    const {id} = this.props.match.params;
    const {messages} = this.state.chats[id];

    return (
      <>
        <ChatList />
        <Chat messages={ messages } onSendMessage={ this.handleSendMessage }/>
      </>);
  }
}
