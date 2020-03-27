import React, { Component } from 'react';
import {Chat} from '../components/Chat/Chat';
export const ROBOT = 'Robot';

export class ChatContainer extends Component {

state = {
    messages: [
      { author: 'Толян', text: 'Всем привет!' },
      { author: 'Колян', text: 'Здрасте' },
      { author: 'Оленька', text: 'Как дела?' },
    ]
  };
timeoutId = null;

componentDidUpdate() {
  const lastMessage = this.state.messages[this.state.messages.length -1];

  if(lastMessage.author !== ROBOT)  {
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => this.handleSendMessage({
      author: ROBOT,
      text:  `Hello ${lastMessage.author}, I'm Robot!`,
    }), 1000)
  }
}

handleSendMessage = (message) => {
      this.setState((state) => ({
        messages: [...state.messages, message]
      }));
  }

  render() {
return <Chat messages={this.state.messages} onSendMessage={this.handleSendMessage} />;
  }
};
