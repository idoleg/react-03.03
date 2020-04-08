import styles from './chat-container.scss';
import classnames from 'classnames/bind';
import React, { Component } from 'react';
import Bot from '../bots/aiprojectBot';
import {MESSAGE_TYPE} from "../constants";
import ChatList from "../components/ChatList/ChatList";
import MessageForm from "../components/MessageForm/MessageForm";
import MessageList from "../components/MessageList/MessageList";
import get from 'lodash/get';
import partial from 'lodash/partial';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const cx = classnames.bind(styles);

export class ChatContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: [],
      bot: new Bot(),
    };

    this.messageListRef = React.createRef();

    fetch('https://raw.githubusercontent.com/vatokato/react-03.03/master/RomanOtstavnov/data/messages.json')
      .then(result => result.json())
      .then(chats => this.setState({ chats }))
      .catch(err => console.error(err));
  }

  addHumanMessage (chatId, message) {
    this.addMessage (
      chatId,
      message,
      partial(this.botAnswer, chatId, message)
    );
  }

  addMessage (chatId, message, onSetState) {
    this.setState(
      state => ({
        chats: state.chats.map(({id, messages, ...otherProps}) => ({
          ...otherProps,
          id,
          messages: id === chatId ? [...messages, message] : messages,
        }))
      }),
      onSetState
    );
  }

  botAnswer = (chatId, message) => {
    const { bot } = this.state;
    bot.getAnswer({ name: message.name, message: message.content })
      .then(answer => this.addMessage(
        chatId,
        {
          name: bot.name,
          content: answer,
          type: MESSAGE_TYPE.ai,
        },
        () => console.log('Ответ робота сохранен')
      ))
      .catch(error => console.error(error));
  };

  addChat (name) {
    this.setState(state => ({
      chats: [...state.chats, {
        id: state.chats[state.chats.length-1].id + 1,
        name,
        messages: [],
      }]
    }));
  }

  render () {
    const chatId = parseInt(get(this.props, 'match.params.id', 0));
    const { chats } = this.state;
    const chat = chats.find(item => item.id === chatId);

    return (
      <div className={cx('wrapper')}>
        <div className={cx('content')}>
          <ChatList
            containerClassName={cx('chat-list')}
            items={chats}
            addChat={this.addChat.bind(this)}
          />
          <Box py={1} px={2} className={cx('message-field')} ref={this.messageListRef}>
            {chat && chat.messages.length
              ?(
                <MessageList messages={chat.messages} containerRef={this.messageListRef} />
              ) : (
                <Typography>{chatId ? 'Сообщений нет' : 'Выберите чат'}</Typography>
              )
            }
          </Box>
        </div>
        <div className={cx('footer')}>
          {Boolean(chatId) && <MessageForm addMessage={this.addHumanMessage.bind(this, chatId)} />}
        </div>
      </div>
    );
  }
};

export default ChatContainer;
