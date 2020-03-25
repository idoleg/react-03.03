import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ChatList from '../../components/ChatList';
import { createChat } from '../../store/chatOperations';

class ChatListContainer extends Component {
  addNewChat = title => event => {
    event.preventDefault();
    event.target.name.value = '';

    this.props.createChat(title);
  };

  render() {
    const { chats, blink } = this.props;

    return <ChatList chats={Object.entries(chats)} addNewChat={this.addNewChat} blinkingIds={blink} />;
  }
}

const mapStateToProps = (store, props) => {
  const { chats, blink, createChat } = store;

  return { chats, blink, createChat };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({createChat}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatListContainer);
