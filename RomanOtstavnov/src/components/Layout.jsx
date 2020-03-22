import styles from './layout.scss';
import classnames from 'classnames/bind';
import React, { Component } from 'react';
import Bot from '../bots/aiprojectBot';
import {MESSAGE_TYPE} from "../constants";
import Header from "./Header/Header";
import ChatList from "./ChatList/ChatList";
import MessageForm from "./MessageForm/MessageForm";
import MessageList from "./MessageList/MessageList";

const cx = classnames.bind(styles);

export class Layout extends Component {
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
          content: answer,
          type: MESSAGE_TYPE.ai,
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
      <div className={cx('wrapper')}>
        <Header />
        <div className={cx('chat-container')}>
          <ChatList
            containerClassName={cx('chat-list')}
            items={[
              {name: 'Room 1'},
              {name: 'Room 2', active: true},
              {name: 'Room 3'},
              {name: 'Room 4'},
            ]}
          />
          <MessageList
            messages={messages}
            className={cx('message-field')}
          />
        </div>
        <div className={cx('footer')}>
          <MessageForm setMessage={this.setMessage.bind(this)} />
        </div>
      </div>
    );
  }
};

export default Layout;