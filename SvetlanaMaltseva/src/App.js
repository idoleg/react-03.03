import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Messageblock from './components/layout/Messageblock';
import Usersblock from './components/layout/Usersblock';

class App extends Component {
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
      ]
    };
    this.addMessage = this.addMessage.bind(this);
  }
  addMessage(message) {
    const newMessageList = [...this.state.messages, message];
    this.setState({ messages: newMessageList });
  }

  render() {
    const { messages } = this.state;
    return (
      <div>
        <div className='container-fluid'>
          <div className='row'>
            <Usersblock messages={messages} />
            <Messageblock messages={messages} addMessage={this.addMessage} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
