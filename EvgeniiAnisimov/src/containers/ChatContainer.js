// import React, { Component } from 'react';
import { Chat } from '../components/Chat/Chat';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessage } from '../store/chatActions';

export const ROBOT = 'Robot';

// class ChatContainer extends Component {
  // state = {
  //   chats: {
  //     1: {
  //       name: 'Chat 1',
  //       messages: [
  //         {name: "Ivan", content: "Hello in Chat 1, Petr"},
  //         {name: "Petr", content: "Hello, how are you?"},
  //         {name: "Ivan", content: "I'm well"}
  //       ]
  //     },
  //     2: {
  //       name: 'Chat 2',
  //       messages: [
  //         {name: "Sergey", content: "Hello in Chat 2, Petr"},
  //         {name: "Petr", content: "Hello, how are you?"},
  //         {name: "Sergey", content: "I'm well"}
  //       ]
  //     },
  //     3: {
  //       name: 'Chat 3',
  //       messages: []
  //     }
  //   }
  //   lastMessage: {name: "Ivan", content: "I'm well"}
  // };

  // timeoutId = null;

  // handleRobotAnswer = () => {
  //   const {id} = this.props.match.params;
  //   if(id && this.state.chats[id]) {
  //     const currentMessages = this.state.chats[id].messages;
  //     const lastMessage = currentMessages[currentMessages.length - 1];
  //
  //     if(lastMessage && lastMessage.name !== ROBOT) {
  //       clearTimeout(this.timeoutId);
  //       this.timeoutId = setTimeout(() => this.handleSendMessage(id)({
  //         name: ROBOT,
  //         content: `Hello, ${lastMessage.name}, I'm Robot!`,
  //       }), 3000)
  //     }
  //   }
  // }

//   handleSendMessage = (id) => (message) => {
//     this.props.sendMessage(id, message.name, message.content);
//     this.setState((state) => ({
//       chats: {
//         ...state.chats,
//         [id]: {
//           name: state.chats[id].name,
//           messages: [...state.chats[id].messages, message]
//         }
//       }
//   })); //, this.handleRobotAnswer
// }

//   render() {
//     // const {id} = this.props.match.params;
//     // const messages = id && this.state.chats[id] ? this.state.chats[id].messages : undefined;
//     const {id, messages, handleSendMessage} = this.props;
//
//     return <Chat messages={messages} onSendMessage={handleSendMessage} />;
//   }
// }

const mapStateToProps = (store, props) => {
  const {id} = props.match.params;
  const chats = id && store.chats ? store.chats : undefined;
  // console.log("mapStateToProps->store", store);
  // console.log("mapStateToProps-props>", props);

  return {
    id,
    messages: chats && chats[id] ? chats[id].messages: undefined,
  }
}

const mapDispatchProps = (dispatch) => bindActionCreators({
  sendMessage
}, dispatch)

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {id} = ownProps.match.params;

  // const handleSendMessage = ({name, content}) => {
  //   dispatchProps.sendMessage(id, name, content)
  // }
  const onSendMessage = ({name, content}) => {
    dispatchProps.sendMessage(id, name, content)
  }

  return {
    messages: stateProps.messages,
    // handleSendMessage
    onSendMessage
  }

}

// export default connect(mapStateToProps, mapDispatchProps, mergeProps)(ChatContainer) //, mapDispatchProps, mergeProps
export default connect(mapStateToProps, mapDispatchProps, mergeProps)(Chat) //, mapDispatchProps, mergeProps
