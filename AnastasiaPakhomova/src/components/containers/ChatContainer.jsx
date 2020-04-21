import React, {Component} from "react"
import {Chat} from '../Chat/Chat'
import ChatList from '../ChatList/ChatList'
import './ChatContainer.css'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {sendMessage} from '../../store/chatActions'


export const ROBOT = 'Robot'

 class ChatContainer extends Component {

	render () {
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










