import React from "react";
import ReactDOM from "react-dom";
import SendForm from "./sendform";
import MessageList from './messageslist';

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
