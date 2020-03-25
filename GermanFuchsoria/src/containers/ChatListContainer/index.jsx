import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChatList from '../../components/ChatList';
import { addChat } from '../../store/chatActions';
import { generateId } from '../../components/common/idUtils';

class ChatListContainer extends Component {
  addNewChat = title => event => {
    event.preventDefault();
    event.target.name.value = '';

    this.props.dispatch(addChat({ id: generateId(), title }));
  };

  render() {
    const { chats, blink } = this.props;

    return <ChatList chats={Object.entries(chats)} addNewChat={this.addNewChat} blinkingIds={blink} />;
  }
}

const mapStateToProps = (store, props) => {
  const { chats, blink } = store;

  return { chats, blink };
};

export default connect(mapStateToProps)(ChatListContainer);
