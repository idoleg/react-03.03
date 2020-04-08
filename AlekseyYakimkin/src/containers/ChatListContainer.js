import React, {Component} from 'react';
import { ChatList } from '../components/ChatList/ChatList'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addNewChat} from '../store/chatActions'

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
        headerName,
        chats,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    addNewChat
}, dispatch)

const mergeProps = ( stateProps, dispatchProps, ownProps ) => {

    console.log(ownProps)
    //const {id} = ownProps.match.params
    const handleAddChat = ({name}) => {
        dispatchProps.addNewChat(name)
    }
    return{
        // messages: stateProps.messages,
        // url: stateProps.url,
        headerName: stateProps.headerName,
        chats: stateProps.chats,
        handleAddChat
    }
}

export default connect(mapStateToProps,mapDispatchToProps,mergeProps )(ChatList)//,mapDispatchToProps, mergeProps