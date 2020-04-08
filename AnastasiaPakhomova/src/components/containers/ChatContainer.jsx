import React, {Component} from "react"
import {Chat} from '../Chat/Chat'
import {ChatList} from '../ChatList/ChatList'
import './ChatContainer.css'

export const ROBOT = 'Robot'

export class ChatContainer extends Component {
	state = {
        chats: {
			1: {
				name: 'Chat 1',
				messages: [
					{name: "Ivan", text: "Hello in chat 1!"},
                    {name: "Petr", text: "Helo, how are you?"},
                    {name: "Ivan", text: "I'm well."}
				]
			},
			2: {
				name: 'Chat 2',
				messages: [
					{name: "Fedor", text: "Hi, it's chat 2!"},
                    {name: "NiKola", text: "Hi! How are you?!"},
                    {name: "Fedor", text: "I'm ok."}
				]
			},
			3: {
				name: 'Chat 3',
				messages: [
					{name: "Alex", text: "Hello in chat 3!"},
                    {name: "Moisha", text: "Helo, how are you?"},
                    {name: "Alex", text: "I'm well"}
				]
			}
		}
    }

timeoutID = null

handleRobotAnswer = () => {
	const {id} = this.props.match.params

	if(id && this.state.chats[id]) {
	   const currentMessages = this.state.chats[id].messages
	   const lastMessage = currentMessages[currentMessages.length - 1]

	   if(lastMessage && lastMessage.name !== ROBOT) {
		clearTimeout(this.timeoutID)
		this.timeoutID = setTimeout(() => this.handleSendMessage(id)({
                name: ROBOT, text: `Hello, ${lastMessage.name}! I'm Robot.`
        }), 1000)
    	}
	}
}

handleSendMessage = (id) => (message) => {
	this.setState((state) => ({
		chats: {
			...state.chats,
			[id]: {
				name: state.chats[id].name,
				messages: [...state.chats[id].messages,  message]
			}
		}
	}),
		this.handleRobotAnswer)
}

	render () {
		const {id} = this.props.match.params
		const messages = id && this.state.chats[id] ? this.state.chats[id].messages : undefined

		return(
			<div className="chat-field">
			<ChatList />
			<div className="chat">
			<Chat messages={messages} onSendMessage={this.handleSendMessage(id)} />
			</div>
			</div>
		)
	}
}
