import { Chat } from "../components/Chat/Chat.jsx"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessage } from '../store/chatActions';

// export class ChatContainer extends Component {
//   constructor() {
//     super();

//     this.state = {
//       timeoutId: null
//     };
//     // this.handleSendMessage = this.handleSendMessage.bind(this);
//     this.handleRobotAnswer = this.handleRobotAnswer.bind(this);
//   }

//   handleRobotAnswer () {
//     const {id} = this.props.match.params;

//     if(id && this.state.chats.chats[id]) {
//       const currentMessage = this.state.chats[id].messages;

//       const lastUserIdx = currentMessage.length - 1;
//       const lastUserName = currentMessage[lastUserIdx].name;

//       const robotName = "Mr. Robot";
//       const robotMessage = `What's wrong with you, ${ lastUserName }? I'm Robot, don't talk to me.`;

//       if(lastUserName !== robotName) {
//         clearTimeout(this.timeoutId);
//         this.timeoutId = setTimeout(() => this.handleSendMessage(id)({
//             name: robotName,
//             content: robotMessage,
//         }), 1000);
//       }
//     }
//   }

//   // handleSendMessage = (id) => (message) => {
//   //   this.props.sendMessage(id, message.name, message.content);
//     // this.setState({
//     //   chats: {
//     //     ...this.state.chats,
//     //     [id]: {
//     //       name: this.state.chats[id].name,
//     //       messages: [...this.state.chats[id].messages, message]
//     //     }
//     //   }
//     // }) //, this.handleRobotAnswer
//   // }

//   render() {
//     // const {id} = this.props.match.params;
//     // const {messages} = id && this.state.chats[id] ? this.state.chats[id] : undefined;

//     const { id, messages, handleSendMessage } = this.props;

//     return (
//       <>
//         <ChatList />
//         <Chat messages={ messages } onSendMessage={ handleSendMessage }/>
//       </>);
//   }
// }

const mapStateToProps = (store, props) => {
  const {id} = props.match.params;
  const chats = id && store.chats ? store.chats : undefined;

  return {
    messages: chats[id] ? chats[id].messages : undefined,
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  sendMessage
}, dispatch);

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {id} = ownProps.match.params;

  const onSendMessage = ({name, content}) => {
    dispatchProps.sendMessage(id, name, content)
  }

  return {
    messages: stateProps.messages,
    onSendMessage
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Chat);