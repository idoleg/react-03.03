import React, {Component} from 'react';
import { ChatList } from '../components/ChatList/ChatList'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {deleteChat} from '../store/chatActions'
import {createChat} from '../store/chatOperations'

export const ROBOT = "Robot"

// class ChatListContainer extends Component {
//     // state = {
//     //     chats:[
//     //         { name: "Ivan", img: "https://via.placeholder.com/40" },
//     //         { name: "Alex", img: "https://via.placeholder.com/40" },
//     //         { name: "Robot", img: "https://via.placeholder.com/40" },
//     //     ]
//     // }
//     componentWillUnmount(){
//         console.log("ChatListContainer unmount")
//     }
//     render() {
//         console.log(this.props)
//         const { chats, handleAddChat  } = this.props
//         return  <ChatList chats={chats} handleAddChat={handleAddChat} />
//     }
// }

const mapStateToProps = (store,props) => {
    console.log('mapStateToProps store',store)
    console.log('mapStateToProps props',props)
    const {idChat} = props
    // const url = props.match.url
    const headerName = idChat && store.chats.chats[idChat] ? store.chats.chats[idChat].name : "Чаты"
    const chats = store.chats &&  store.chats.chats ?  store.chats.chats: undefined
    return {
        // id,
        // messages: chats &&  chats[id] ?  chats[id].messages : undefined,
        // url,
        isLoading: store.chats.isLoading,
        idChat,
        headerName,
        chats,
        error: store.chats.error
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    createChat, deleteChat
}, dispatch)

const mergeProps = ( stateProps, dispatchProps, ownProps ) => {

    console.log(ownProps)
    //console.log(idChat)
    const {idChat} = ownProps
    const id = idChat
    console.log(idChat)
    const handleAddChat = ({name}) => {
        dispatchProps.createChat(name)
    }
    const deleteChat = ({id}) => {
        dispatchProps.deleteChat(id)
    }
    return{
        // messages: stateProps.messages,
        // url: stateProps.url,
        isLoading: stateProps.isLoading,
        headerName: stateProps.headerName,
        chats: stateProps.chats,
        handleAddChat,
        deleteChat,
        id: idChat,
        error: stateProps.error
    }
}

export default connect(mapStateToProps,mapDispatchToProps,mergeProps )(ChatList)//,mapDispatchToProps, mergeProps