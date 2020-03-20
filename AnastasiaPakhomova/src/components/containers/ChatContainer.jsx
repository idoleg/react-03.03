import React, {Component} from "react"
import {Chat} from '../Chat/Chat'


export const ROBOT = 'Robot'

export class ChatContainer extends Component {
	state = {
        messages: [
			{name: "Ivan", text: "Hello, world!"}
		],
    }


componentDidUpdate() {
	const lastMessage = this.state.messages[this.state.messages.length - 1]
	window.clearTimeout(this.timeoutID)

    if(lastMessage.name !== ROBOT) {

		this.timeoutID = setTimeout(() => this.handleSendMessage({
                name: ROBOT, text: `Hello, ${lastMessage.name}! I'm Robot.`
        }), 1000)
    }
}

handleSendMessage = (message) => {
	this.setState((state) => ({messages: [...state.messages,  message]}))
}

	render () {
		return <Chat messages={this.state.messages} onSendMessage={this.handleSendMessage} />
	}
}
