import React from 'react';
import { Message } from './../Message/Message.jsx';
import './MessageList.css';

export class MessageList extends React.Component {
  state = {
    messages: [
      { name: "Ivan", content: "Hi!" },
      { name: "Oleg", content: "Hello!" },
      { name: "Ivan", content: "How are you?" },
    ]
  }

  handleClick = () => {
    this.setState({
      messages: [
        ...this.state.messages,
        {name: "Oleg", content: "I'm fine."}
      ]
    });
  };

  componentDidUpdate() {
    const lastUser = this.state.messages.length - 1;
    const lastUserName = this.state.messages[lastUser].name;
    const robotName = "Mr. Robot";
    const robotMessage = `What's wrong with you, ${lastUserName}? I'm Robot, don't talk to me.`;

    if (this.state.messages[lastUser].name !== robotName) {
      setTimeout(() => {
        this.setState({
          messages: [
            ...this.state.messages,
            {name: robotName, content: robotMessage}
          ]
        })
      }, 1000);
    }
  }

  render() {
    return (
      <>
        <div className="message__wrapper">
          { this.state.messages.map((message, index) => <Message key={index} {...message} />) }
        </div>
        <button className="message__btn" onClick={ this.handleClick }>Send Message</button>
      </>
    )
  }
}