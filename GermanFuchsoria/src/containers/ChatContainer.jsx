import React, { Component } from 'react';
import { Chat } from '../components/Chat/Chat';
import { textCapitalize } from '../components/common/textUtils';
import Grid from '@material-ui/core/Grid';
import ChatList from '../components/ChatList/ChatList';
import { generateId } from '../components/common/idUtils';

export default class ChatContainer extends Component {
  state = {
    chats: {
      0: {
        chatTitle: 'Chat 1',
        messages: [
          { author: 'Ivan', text: 'Hi Guys' },
          { author: 'Stephan', text: 'Hiya' },
          { author: 'Alex', text: 'Do you wanna chat with?' }
        ]
      },
      1: {
        chatTitle: 'Chat 2',
        messages: [
          { author: 'Ivan2', text: 'Hi Guys' },
          { author: 'Stephan2', text: 'Hiya' },
          { author: 'Alex2', text: 'Do you wanna chat with?' }
        ]
      },
      2: {
        chatTitle: 'Chat 3',
        messages: [
          { author: 'Ivan3', text: 'Hi Guys' },
          { author: 'Stephan3', text: 'Hiya' },
          { author: 'Alex3', text: 'Do you wanna chat with?' }
        ]
      },
      3: {
        chatTitle: 'Chat 4',
        messages: [
          { author: 'Ivan4', text: 'Hi Guys' },
          { author: 'Stephan4', text: 'Hiya' },
          { author: 'Alex4', text: 'Do you wanna chat with?' }
        ]
      }
    }
  };
  robotText = { before: 'Hi ', after: ', i am your personal assistent' };

  addNewChat = title => event => {
    event.preventDefault();

    this.setState(state => ({
      chats: { ...state.chats, [generateId()]: { chatTitle: title, messages: [] } }
    }));
  };

  updateMessagesList = id => message => {
    this.setState(
      state => ({
        chats: {
          ...state.chats,
          [id]: {
            chatTitle: state.chats[id].chatTitle,
            messages: [...state.chats[id].messages, message]
          }
        }
      }),
      this.sendRobotMessage
    );
  };

  sendRobotMessage() {
    const { id } = this.props.match.params;
    const { messages } = this.state.chats[id];
    const lastMessage = messages[messages.length - 1];

    if (lastMessage.authorAccess !== 'bot') {
      const previousMessage = messages[messages.length - 2];

      if (messages.length > 1 && lastMessage.author === previousMessage.author) {
        clearTimeout(this.botTimeout);
      }

      this.botTimeout = setTimeout(() => {
        this.updateMessagesList(id)({
          author: 'robot',
          text: `${this.robotText.before}${textCapitalize(lastMessage.author)}${this.robotText.after}`,
          authorAccess: 'bot'
        });
      }, 3000);
    }
  }

  render() {
    const { id } = this.props.match.params;
    const { chats } = this.state;
    const messages = id && chats[id] ? chats[id].messages : undefined;

    return (
      <Grid container direction="row" justify="center" alignItems="flex-start">
        <Grid container item xs={3}>
          <ChatList chats={Object.entries(chats)} addNewChat={this.addNewChat} />
        </Grid>
        <Grid container item xs={9}>
          {messages ? (
            <Chat messages={messages} onSendMessage={this.updateMessagesList(id)} />
          ) : (
            <h3>Select your chat</h3>
          )}
        </Grid>
      </Grid>
    );
  }
}
