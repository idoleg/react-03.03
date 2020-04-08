import React, { Component } from "react";
import {ChatContainer} from '../../containers/ChatContainer';

// import SendForm from '../SendForm/SendForm';
// import {MessageList} from '../MessageList/MessageList';
export const App = () => {
  return (
    <ChatContainer />
  )
}
// export default class App extends Component {
//
//   constructor ( props ) {
//
//       super(props);
//
//       this.state = {
//         messages: [
//           { author: 'Толян', text: 'Всем привет!' },
//           { author: 'Колян', text: 'Здрасте' },
//           { author: 'Оленька', text: 'Как дела?' }
//         ]
//       };
//
//       this.updateMessageList = this.updateMessageList.bind(this);
//
//      }
//
//   updateMessageList(message) {
//     const array = [...this.state.messages, message];
//     this.setState({ messages: array });
//   }
//
//   render() {
//
//     const { messages } = this.state;
//
//     return (
//
//       <div className="layout">
//         <h1 className="app-title">Ку Чатланин!</h1>
//         <div className="content">
//           <MessageList messages={messages} />
//           <SendForm updateMessageList={this.updateMessageList} />
//         </div>
//       </div>
//     );
//   }
// };
