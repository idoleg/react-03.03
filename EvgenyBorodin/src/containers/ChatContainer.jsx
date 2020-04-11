import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { sendMessage, addChat } from '../store/chatActions.js';

import { Header } from '../components/Header/Header.jsx';
import { Chat } from '../components/Chat/Chat.jsx';
// import { ChatList } from '../components/ChatList/ChatList.jsx'
import ChatListContainer from './ChatListContainer.jsx';
// import { ChatLayout } from '../components/ChatLayout/ChatLayout.jsx'

import './ChatContainer.css'

export const ROBOT = 'Robot'

const ChatLayout = ({id, chats, defaultUser, onAddChat, onSendMessage}) => {
    const messages = id && chats[id] ? chats[id].messages : undefined ;
    let text = defaultUser !== '' ? `Welcome, ${defaultUser}! ` : 'Welcome! '
    text += id && chats[id] ? ` Chat ${chats[id].name}` : `Choose chat from the list`
    return (<div className="chatcontainer">
        <Header headerText={text}/>
        <ChatListContainer />
        {/* <ChatList chats={chats} selectedId={id} onAddChat={onAddChat} /> */}
        <Chat messages={messages} defaultUser={defaultUser} onSendMessage={onSendMessage} />
    </div>)
}

const mapStateToProps = (store, props) => {
    const {id} = props.match.params;
    const chats = store.app.chats ? store.app.chats  : undefined
    const defaultUser = store.app.profile.defaultUser ? store.app.profile.defaultUser : ''

    return {
        chats,
        selectedId: id,
        defaultUser
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    addChat,
    sendMessage
}, dispatch)

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const {id} = ownProps.match.params;
    // console.log('state', stateProps, 'own', ownProps)

    const onAddChat = ({name}) => {
        dispatchProps.addChat(name)
    }

    const onSendMessage = ({user, text}) => {
        dispatchProps.sendMessage(id, user, text)
    }

    return {
        id,
        chats: stateProps.chats,
        defaultUser: stateProps.defaultUser,
        onAddChat,
        onSendMessage
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ChatLayout)

// export class ChatContainer extends Component {
//     state = {
//         chats: {
//             1: {
//                 name: "IT Group",
//                 messages: [
//                     { user: "Ivan", text: "Hello, world!" },
//                     { user: "Petr", text: "Helo, how are you?" },
//                     { user: "Ivan", text: "I'm well" }
//                 ]
//             },
//             2: {
//                 name: "Bot Group",
//                 messages: [
//                     { user: "Bot 1", text: "Hello, bots!" },
//                     { user: "Bot 2", text: "Get out of here, bot!" },
//                     { user: "Bot 3", text: "No bots allowed in this chat, ha-ha-ha!" }
//                 ]
//             },
//             3: {
//                 name: "Never read this",
//                 messages: [
//                     { user: "sss", text: "Whoa!" },
//                     { user: "qqq", text: "Oops!" },
//                     { user: "www", text: "Yep." }
//                 ]
//             },
//         }
//     }

//     timeoutID = null

//     handleRobotAnswer = () => {
//         const {id} = this.props.match.params;
        
//         if(id && this.state.chats[id]) {
//             const currentMessages = this.state.chats[id].messages;
//             const lastMessage = currentMessages[currentMessages.length - 1];
            
//             if(lastMessage && lastMessage.user != ROBOT) {
//                 clearTimeout(this.timeoutId);
//                 this.timeoutId = setTimeout(() => this.handleSendMessage(id)({
//                     user: ROBOT,
//                     text: `Hello ${lastMessage.user}! Robot is busy, it will answer soon...`,
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

//     handleNewChat = () => {
        
//         const name = prompt('Enter chat name')
//         const newId = Object.keys(this.state.chats).length + 1
//         this.setState((state) => ({
//             chats: {
//                 ...state.chats,
//                 [newId]: {
//                     name,
//                     messages: []
//                 }
//             }
//         }))
//         debugger
//     }

//     render() {
//         const {id} = this.props.match.params;
//         const messages = id && this.state.chats[id] ? this.state.chats[id].messages : undefined ;
//         const headerText = id && this.state.chats[id] ? `Чат ${this.state.chats[id].name}` : `Выберите чат из списка`

//         return (
//         <div className="chatcontainer">
//             <nav>
//                 <Link to="/profile">Edit the profile</Link>
//                 <Link to="/">Main page</Link>
//                 <Link to="/about">About...</Link>
//             </nav>
//             <header className="header">
//                 {headerText}
//             </header>
//             <ChatList chats={this.state.chats} selectedId={id} onNewChat={this.handleNewChat}/>
//             <Chat messages={messages} onSendMessage={this.handleSendMessage(id)}/>
//         </div>)
//     }
// }

// export const ChatContainer = () => {
//     return connect(mapStateToProps, mapDispatchToProps, mergeProps)(ChatLayout)
// }