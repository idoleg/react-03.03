import React from 'react';
import Bot from '../bots/aiprojectBot';
import {MESSAGE_TYPE} from "../constants";
import get from 'lodash/get';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {addChat, addMessage, loadData} from "../../store/chatActions";
import Chat from '../components/Chat/Chat';

const bot = new Bot();

const mapStateToProps = ({ chat }, props) => {
  const { chats = [] } = chat;
  return {
    chatId:  parseInt(get(props, 'match.params.id', 0)),
    chats
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addMessage,
  addChat,
}, dispatch);

const mergeProps = ({
  chatId,
  chats,
}, {
  addMessage: addMessageDispatch,
  addChat: addChatDispatch,
}) => {

  const addMessage = ({name, content}) => {
    addMessageDispatch(chatId, name, content);
    bot.getAnswer({ name, message: content })
      .then(answer => addMessageDispatch(
        chatId,
        bot.name,
        answer,
        MESSAGE_TYPE.ai
      ))
      .catch(error => console.error(error));
  };

  return {
    chats,
    chatId: chats.some(item=>item.id===chatId) ? chatId : false,
    activeChat: chats.find(item => item.id === chatId),
    addMessage,
    addChat: ({ name }) => addChatDispatch(name),
  }
};
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Chat);
