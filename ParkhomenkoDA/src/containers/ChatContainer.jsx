//import React, { Component } from 'react';
import { Chat } from '../components/Chat/Chat';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {sendMessage} from '../store/chatActions';

export const ROBOT = 'Robot';

// export class ChatContainer extends Component {
//     state = {
//         chats: {
//             1: {
//                 name: 'Chat 1',
//                 messages: [
//                     { name: "Ivan", content: "Hello, in chat 1!" },
//                     { name: "Petr", content: "Helo, how are you?" },
//                     { name: "Ivan", content: "I'm well" },
//                 ]
//             },
//             2: {
//                 name: 'Chat 2',
//                 messages: [
//                     { name: "Nikola", content: "Hi" },
//                     { name: "Dima", content: "It's chat 2" },
//                     { name: "Nikola", content: "Ok" },
//                 ]
//             },
//             3: {
//                 name: 'Chat 3',
//                 messages: []
//             }
//         }
//     };
    
//     timeoutId = null;

//     handleRobotAnswer = () => {
//         const {id} = this.props.match.params;
        
//         if(id && this.state.chats[id]) {
//             const currentMessages = this.state.chats[id].messages;
//             const lastMessage = currentMessages[currentMessages.length - 1];
            
//             if(lastMessage && lastMessage.name != ROBOT) {
//                 clearTimeout(this.timeoutId);
//                 this.timeoutId = setTimeout(() => this.handleSendMessage(id)({
//                     name: ROBOT,
//                     content: `Hello ${lastMessage.name}, I'm Robot!`,
//                 }), 1000);
//             }
//         }
//     }
    
//     handleSendMessage = (id) => (message) => {
//         this.setState((state) => ({
//             chats: {
//                 ...state.chats,
//                 [id]: {
//                     name: state.chats[id].name,
//                     messages: [...state.chats[id].messages, message]
//                 }
//             }   
//         }), this.handleRobotAnswer);
//     }

//     render() {
//         const {id} = this.props.match.params;
//         const messages = id && this.state.chats[id] ? this.state.chats[id].messages : undefined ;
//         return <Chat messages={messages} onSendMessage={this.handleSendMessage(id)}/>;
//     }
// }

const mapStateToProps = (store, props) => {
    const {id} = props.match.params;
    const chats = id && store.chats ? store.chats : {}

    return {
        messages: chats[id] ? chats[id].messages : undefined,
    }
    
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    sendMessage
}, dispatch)

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