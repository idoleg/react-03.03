import React, { useEffect, useRef } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { deleteMessage } from '../../store/chatActions';
import { connect } from 'react-redux';
import { Message } from '../Message';

const MessageList = ({ messages, deleteMessage, chatId }) => {
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current.lastChild) {
      listRef.current.lastChild.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  });

  const deleteHandler = ({messageId, chatId}) => () => {
    deleteMessage({messageId, id: chatId});
  };

  return (
    <ul className="chat__messages" ref={listRef}>
      {messages && messages.map((message, i) => <Message {...message} chatId={chatId} handler={deleteHandler} key={i} />)}
    </ul>
  );
};

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes))
};

const mapStateToProps = (store, props) => {
  return { store };
};

const mapDispatchToProps = dispatch => bindActionCreators({ deleteMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
