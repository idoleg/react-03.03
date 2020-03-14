import React, { Component, Fragment } from 'react';
import Message from './Message';
import SendForm from './SendForm';

export default class MessageField extends Component {
  state = {
    messages: [
      { author: 'Ivan', text: 'Hi Guys' },
      { author: 'Stephan', text: 'Hiya' },
      { author: 'Alex', text: 'Do you wanna chat with?' }
    ]
  };
  lastMessageInfo = { fromRobot: false, author: '' };
  robotText = { before: 'Hi ', after: ', i am your personal assistent' };

  textCapitalize(text) {
    return text.replace(/[a-zа-яё]/i, text[0].toUpperCase());
  }

  updateMessagesList = message => {
    this.setState(state => ({ messages: [...state.messages, message] }));
    this.lastMessageInfo.author = message.author;
  };

  componentDidUpdate() {
    if (this.lastMessageInfo.fromRobot) {
      this.lastMessageInfo.fromRobot = false;
    } else {
      this.updateMessagesList({
        author: 'robot',
        text: `${this.robotText.before}${this.textCapitalize(this.lastMessageInfo.author)}${this.robotText.after}`
      });
      this.lastMessageInfo.fromRobot = true;
    }
  }

  render() {
    const { messages } = this.state;

    return (
      <Fragment>
        <ul className="content__messages">
          {messages.map((message, i) => (
            <Message textCapitalize={this.textCapitalize} {...message} key={i} />
          ))}
        </ul>
        <SendForm updateMessagesList={this.updateMessagesList} />
      </Fragment>
    );
  }
}
