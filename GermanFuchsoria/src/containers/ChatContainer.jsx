import React, { Component } from 'react';
import { Chat } from '../components/Chat/Chat';
import { textCapitalize } from '../components/common/textUtils';

export default class ChatContainer extends Component {
  state = {
    messages: [
      { author: 'Ivan', text: 'Hi Guys' },
      { author: 'Stephan', text: 'Hiya' },
      { author: 'Alex', text: 'Do you wanna chat with?' }
    ]
  };
  robotText = { before: 'Hi ', after: ', i am your personal assistent' };

  updateMessagesList = message => {
    this.setState(state => ({ messages: [...state.messages, message] }));
  };

  componentDidUpdate() {
    const { messages } = this.state;
    const lastMessage = messages[messages.length - 1];
    const previousMessage = messages[messages.length - 2];

    if (lastMessage.authorAccess !== 'bot') {
      if (lastMessage.author === previousMessage.author) {
        clearTimeout(this.botTimeout);
      }

      this.botTimeout = setTimeout(() => {
        this.updateMessagesList({
          author: 'robot',
          text: `${this.robotText.before}${textCapitalize(lastMessage.author)}${this.robotText.after}`,
          authorAccess: 'bot'
        });
      }, 5000);
    }
  }

  render() {
    return <Chat messages={this.state.messages} onSendMessage={this.updateMessagesList} />;
  }
}
