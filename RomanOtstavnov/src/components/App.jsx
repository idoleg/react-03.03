import React, { Component } from 'react';
import MessageList from "./MessageList";
import MessageForm from "./MessageForm";
import Bot from '../bots/aiprojectBot';


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      Bot: new Bot(),
    };
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/vatokato/react-03.03/master/RomanOtstavnov/data/messages.json')
      .then(result => result.json())
      .then(messages => this.setState({ messages }));
  }

  componentDidUpdate(prevProps, prevState) {
    const { messages, Bot } = this.state;
    const lastMessage = messages[messages.length - 1];
    if(lastMessage.name !== Bot.name) {
      Bot.getAnswer({ name: lastMessage.name, message: lastMessage.content })
        .then(answer => this.setMessage({
          name: Bot.name,
          content: answer
        }))
        .catch(error => console.error(error));
    }
  }

  setMessage (message) {
    this.setState(state => ({
      messages: [...state.messages, message],
    }));
  }

  render () {
    const { messages } = this.state;
    return (
      <div className='container'>
        <MessageList messages={messages} />
        <MessageForm setMessage={this.setMessage.bind(this)} />
      </div>
    );
  }
};

export default App;