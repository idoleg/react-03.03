import React from "react"
import PropTypes from "prop-types"
import {Message} from '../Message/Message'
import {MessageList} from '../MessageList/MessageList'
import {ChatForm} from '../ChatForm/ChatForm'

export const Chat = ({messages, onSendMessage}) => {
	if(messages) {
		return (
			<div>
				{messages.length ? <MessageList messages={messages}/> : <h4>No messages</h4> }
				<ChatForm onSendMessage={onSendMessage} />
			</div>
		)
	}
	else {
		return (
			<strong>Select a chat in the list</strong>
		)
	}

}

Chat.propTypes = {
	messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
	onSendMessage: PropTypes.func.isRequired
}

