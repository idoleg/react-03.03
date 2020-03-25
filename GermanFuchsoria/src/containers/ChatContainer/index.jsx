import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { Chat } from '../../components/Chat';
import ChatListContainer from '../ChatListContainer';
import { sendMessage } from '../../store/chatActions';

class ChatContainer extends Component {
  updateMessagesList = id => message => {
    this.props.dispatch(sendMessage({ id, message }));
  };

  render() {
    const { id, chats } = this.props;
    const currentChat = id && chats[id] ? chats[id] : undefined;
    const messages = currentChat ? currentChat.messages : undefined;

    return (
      <Grid container direction="row" justify="center" alignItems="flex-start">
        <Grid container item xs={3}>
          <ChatListContainer />
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
