import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { Chat } from '../../components/Chat';
import ChatListContainer from '../ChatListContainer';
import { updateMessage } from '../../store/chatOperations';

class ChatContainer extends Component {
  updateMessagesList = id => message => {
    this.props.updateMessage({ id, message });
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
            <Chat messages={messages} chatId={id} onSendMessage={this.updateMessagesList(id)} />
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

const mapDispatchToProps = (dispatch) => 
  bindActionCreators({updateMessage}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
