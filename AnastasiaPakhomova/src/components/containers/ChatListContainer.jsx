import React from "react"
import {ChatList} from '../ChatList/ChatList'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {createChat} from '../../store/chatOperations'


const mapStateToProps = (store) => {
	 const chats = Object.entries(store.chats.chats).map(([id, {name, fire}]) => ({id, name, fire}))

   return {
	   isLoading: store.chats.isLoading,
       error: store.chats.error,
	   chats
   }
}

const mapDispatchToProps = dispatch => bindActionCreators({ createChat }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ChatList)
