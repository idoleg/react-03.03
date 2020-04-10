import React, {Component} from "react"
import {Chat} from '../Chat/Chat'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {sendMessage} from '../../store/chatActions'


const mapStateToProps = (store, props) => {
    const {id} = props.match.params
    const chats = id && store.chats.chats ? store.chats.chats : {}
    return {
		isLoading: store.chats.isLoading,
        error: store.chats.error,
        messages: id && store.chats.chats[id] ? store.chats.chats[id].messages : undefined,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    sendMessage
}, dispatch)

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const {id} = ownProps.match.params

    const onSendMessage = ({name, text}) => {
        dispatchProps.sendMessage(id, name, text)
    }

    return {
		isLoading: stateProps.isLoading,
        error: stateProps.error,
        messages: stateProps.messages,
		onSendMessage
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps) (Chat)





