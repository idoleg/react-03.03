import React from "react"
import PropTypes from "prop-types"
import {Message} from '../Message/Message'
import {MessageList} from '../MessageList/MessageList'
import {ChatForm} from '../ChatForm/ChatForm'
import './Chat.css'


export const Chat = ({isLoading, error, messages, onSendMessage}) => {

	if (isLoading) {
	   return <div>Messages are loaded</div>
   }
	if(error) {
        return <div>Ошибка подключения</div>
    }
	if(messages) {
		return (
			<div className="chat">
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

