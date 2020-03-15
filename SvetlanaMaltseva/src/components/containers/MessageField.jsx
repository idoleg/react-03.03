import React, { Component } from 'react';
import { Chat } from '../Chat/Chat';

class MessageField extends Component {
  constructor() {
    super();
    this.state = {
      messages: [
        {
          name: 'Brandon',
          text: 'Hi, everyone! How are you?'
        },
        {
          name: 'Mary',
          text: "Hi, Brandon. I'm fine, thanks. And you?"
        },
        {
          name: 'John',
          text: 'Hey, Brandon. Long time no see.'
        }
      ],
      robot: [
        'How can I help you?',
        'What can I do for you?',
        "I'm not listening",
        'Stay away from me'
      ],
      isloading: false
    };
  }

  addMessage = message => {
    this.setState(state => ({
      messages: [...state.messages, message]
    }));
  };

  componentDidUpdate() {
    const { robot, isloading } = this.state;
    const lastMessage = this.state.messages[this.state.messages.length - 1];
    let rand = Math.floor(Math.random() * robot.length);
    if (lastMessage.name != 'Robot' && !isloading) {
      this.setState(state => ({ isloading: true }));
      setTimeout(() => {
        this.addMessage({
          name: 'Robot',
          text: `Hey, ${lastMessage.name}! ${robot[rand]}`
        });
        this.setState(state => ({ isloading: false }));
      }, 1000);
    }
  }
  render() {
    return <Chat messages={this.state.messages} addMessage={this.addMessage} />;
  }
}

export default MessageField;
