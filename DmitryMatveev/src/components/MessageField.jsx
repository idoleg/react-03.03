import React, { Component, Fragment } from 'react';
import Message from './Message/Message';
import FormForUser from './FormForUser/FormForUser';

export default class MessageField extends Component {
  state = {
    messages: [
      { author: 'RoboFriend', text: 'Привет!' },
      { author: 'RoboFriend', text: 'Как дела?' },
    ]
  };

  updateMessagesList = message => {
    this.setState(state => ({ messages: [...state.messages, message] }));
  };

  componentDidUpdate() {
    if (this.state.messages.length % 2 === 1) {  // Остаток от деления на 2
        setTimeout(() =>
        this.setState(
            { messages: [ ...this.state.messages, {author: 'RoboFriend', text: 'Не приставай ко мне, я робот!'} ] }),
        1000);
    }
}

  render() {
    const { messages } = this.state;

    return (
      <Fragment>
        <ul className="content__messages">
          {messages.map((message, i) => (
            <Message  {...message} key={i} />
          ))}
        </ul>
        <FormForUser updateMessagesList={this.updateMessagesList} />
      </Fragment>
    );
  }
}