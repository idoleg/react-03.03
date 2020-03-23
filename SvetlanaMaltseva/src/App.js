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
      ],
      robot: [
        'How can I help you?',
        'What can I do for you?',
        "I'm not listening",
        'Stay away from me'
      ]
    };
    this.addMessage = this.addMessage.bind(this);
  }

  addMessage(message) {
    const newMessageList = [...this.state.messages, message];
    this.setState({ messages: newMessageList });
  }
  componentDidUpdate() {
    const { messages } = this.state;
    const { robot } = this.state;
    let rand = Math.floor(Math.random() * robot.length);
    if (messages[messages.length - 1].name != 'Robot') {
      setTimeout(
        () =>
          this.setState({
            messages: [
              ...this.state.messages,
              {
                name: 'Robot',
                text:
                  'Hey, ' +
                  messages[messages.length - 1].name +
                  '! ' +
                  robot[rand]
              }
            ]
          }),
        1000
      );
    }
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
