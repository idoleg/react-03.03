import React, {Component} from "react"
import {Chat} from '../Chat/Chat'
import ChatList from '../ChatList/ChatList'
import './ChatContainer.css'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {sendMessage} from '../../store/chatActions'



export const ROBOT = 'Robot'

 class ChatContainer extends Component {
//	state = {
//        chats: {
//			1: {
//				name: 'Chat 1',
//				messages: [
//					{name: "Ivan", text: "Hello in chat 1!"},
//                    {name: "Petr", text: "Helo, how are you?"},
//                    {name: "Ivan", text: "I'm well."}
//				]
//			},
//			2: {
//				name: 'Chat 2',
//				messages: [
//					{name: "Fedor", text: "Hi, it's chat 2!"},
//                    {name: "NiKola", text: "Hi! How are you?!"},
//                    {name: "Fedor", text: "I'm ok."}
//				]
//			},
//			3: {
//				name: 'Chat 3',
//				messages: [
//					{name: "Alex", text: "Hello in chat 3!"},
//                    {name: "Moisha", text: "Helo, how are you?"},
//                    {name: "Alex", text: "I'm well"}
//				]
//			}
//		}
//    }

//timeoutID = null

//handleRobotAnswer = () => {
//	const {id} = this.props.match.params
//
//	if(id && this.state.chats[id]) {
//	   const currentMessages = this.state.chats[id].messages
//	   const lastMessage = currentMessages[currentMessages.length - 1]
//
//	   if(lastMessage && lastMessage.name !== ROBOT) {
//		clearTimeout(this.timeoutID)
//		this.timeoutID = setTimeout(() => this.handleSendMessage(id)({
//                name: ROBOT, text: `Hello, ${lastMessage.name}! I'm Robot.`
//        }), 1000)
//    	}
//	}
//}

//handleSendMessage = (id) => (message) => {
 //   this.props.sendMessage(id, message.name, message.text)

//	this.setState((state) => ({
//		chats: {
//			...state.chats,
//			[id]: {
//				name: state.chats[id].name,
//				messages: [...state.chats[id].messages,  message]
//			}
//		}
//	}),
//		//this.handleRobotAnswer
//                 )
//}

// addChat = (name) => {
//       const { chats } = this.state
//       const id = Object.keys(chats).length + 1
//
//       this.setState({
//           chats: {...chats,
//               [id]: {name: name, messages: []}}
//       })
//   }
//chats={this.state.chats} addChat={this.addChat}

	render () {
//		const {id} = this.props.match.params
//		const messages = id && this.state.chats[id] ? this.state.chats[id].messages : undefined
        const {id, messages, handleSendMessage} = this.props

		return(
			<div className="chat-field">
			<ChatList />
			<div className="chat">
			<Chat messages={messages} onSendMessage={handleSendMessage} />
			</div>
			</div>
		)
	}
}


const mapStateToProps = (store, props) => {
    const {id} = props.match.params
    const chats = id && store.chats.chats ? store.chats.chats : undefined
    return {
        //id,
        messages: id && store.chats.chats[id] ? store.chats.chats[id].messages : undefined,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    sendMessage
}, dispatch)

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const {id} = ownProps.match.params

    const handleSendMessage = ({name, text}) => {
        dispatchProps.sendMessage(id, name, text)
    }

    return {
        messages: stateProps.messages,
        handleSendMessage
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps) (ChatContainer)










