import React, { Component } from 'react';
import { Chat } from '../components/Chat/Chat';

export const ROBOT = 'Robot';

export class ChatContainer extends Component {
  state = {
    chats: {
      1: {
        name: 'Chat 1',
        messages: [
          {name: "Ivan", content: "Hello in Chat 1, Petr"},
          {name: "Petr", content: "Hello, how are you?"},
          {name: "Ivan", content: "I'm well"}
        ]
      },
      2: {
        name: 'Chat 2',
        messages: [
          {name: "Sergey", content: "Hello in Chat 2, Petr"},
          {name: "Petr", content: "Hello, how are you?"},
          {name: "Sergey", content: "I'm well"}
        ]
      },
      3: {
        name: 'Chat 3',
        messages: []
      }
    }
    // lastMessage: {name: "Ivan", content: "I'm well"}
  }

  timeoutId = null;

  // componentDidUpdate() {
  //   const lastMessage = this.state.messages[this.state.messages.length - 1];
  //
  //   if(lastMessage.name !== ROBOT) {
  //     clearTimeout(this.timeoutId);
  //     this.timeoutId = setTimeout(() => this.handleSendMessage({
  //       name: ROBOT,
  //       content: `Hello, ${lastMessage.name}, I'm Robot!`,
  //     }), 3000)
  //   }
  // }

  handleSendMessage = (id) => (message) => {
    this.setState((state) => ({
      chats: {
        ...state.chats,
        [id]: {
          name: state.chats[id].name,
          messages: [...state.chats[id].messages, message]
        }
      }
  }));
}

  render() {
    const {id} = this.props.match.params;
    const messages = id && this.state.chats[id] ? this.state.chats[id].messages : undefined;

    return <Chat messages={messages} onSendMessage={this.handleSendMessage(id)} />;
  }
}
