import React from "react";
import ReactDOM from "react-dom";
import SendForm from "./SendForm/sendform";
import MessageList from './MessageList/MessagesList';

export default class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        messages: [
          { author: 'Толян', text: 'Всем привет!' },
          { author: 'Колян', text: 'Здрасте' },
          { author: 'Оленька', text: 'Как дела?' }
        ]
      };
      this.updateMessagesList = this.updateMessagesList.bind(this);
     }

  updateMessagesList(message) {
    const array = [...this.state.messages, message];
    this.setState({ messages: array });
  }
  componentDidUpdate() {
    if (this.state.messages.length % 2 === 1) {
      setTimeout(() =>
          this.setState(
              { messages: [ ...this.state.messages, {author: 'Robot', text: 'Не приставай ко мне, я робот!'} ] }),
            1000);
        }
    }
  render() {

    const { messages } = this.state;

    return (
      <div className="app">
        <h1 className="app-title">Ку Чатланин!</h1>
        <div className="content">
          <MessageList messages={messages} />
          <SendForm updateMessagesList={this.updateMessagesList} />
        </div>
      </div>
    );
  }
};
