import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { Chat } from '../../components/Chat';
import { textCapitalize } from '../../components/common/textUtils';
import ChatList from '../../components/ChatList';
import { generateId } from '../../components/common/idUtils';
import { sendMessage, addChat } from '../../store/chatActions';

class ChatContainer extends Component {
  robotText = { before: 'Hi ', after: ', i am your personal assistent' };

  addNewChat = title => event => {
    event.preventDefault();

    this.props.dispatch(addChat({ id: generateId(), title }));
  };

  updateMessagesList = id => message => {
    // Без промиса роботу очень плохо
    Promise.resolve()
      .then(() => this.props.dispatch(sendMessage({ id, message })))
      .then(() => this.sendRobotMessage());
  };

  componentWillUnmount(){
    // Есть баг, который исправил пока этой заплаткой, 
    // суть в том если написать сообщение и быстро изменить свой никнейм 
    // то бот залагивает и безконечно отправляет одно сообщение без обновленных пропсов
    clearTimeout(this.botTimeout);
  }

  sendRobotMessage() {
    const { id, chats } = this.props;
    const { messages } = chats[id];
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
    const { id, chats } = this.props;
    const currentChat = id && chats[id] ? chats[id] : undefined;
    const messages = currentChat ? currentChat.messages : undefined;

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

const mapStateToProps = (store, props) => {
  const { id } = props.match.params;
  const { chats } = store;

  return { id, chats };
};

export default connect(mapStateToProps)(ChatContainer);
